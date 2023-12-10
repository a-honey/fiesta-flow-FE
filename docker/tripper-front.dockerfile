# 기본 이미지로부터 시작
FROM node:18 AS base

# 의존성 설치 단계에서 기본 이미지를 사용
FROM base AS deps

# libc6-compat 패키지 설치
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 패키지 매니저에 따라 적절한 lock 파일을 복사하고 의존성 설치
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# 빌더 단계에서 기본 이미지를 사용
FROM base AS builder
WORKDIR /app

# 이전 단계에서 설치한 의존성을 복사
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# 애플리케이션 빌드
RUN npm run build

# 실행 단계에서 기본 이미지를 사용
FROM base AS runner
WORKDIR /app

# 환경 변수 설정
ENV NODE_ENV production

# 사용자 및 그룹 생성
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 정적 파일 및 빌드된 애플리케이션 파일을 복사
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 사용자 전환
USER nextjs

# 포트 노출 및 컨테이너 시작 시 실행할 명령 설정
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]
