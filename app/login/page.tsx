"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import AlertBox from "./AlertBox";
import useAuthStore from "../store";
import { useRouter } from "next/navigation";
import Link from "next/link";

function LoginPage() {
  const router = useRouter();
  const [loginFormBody, setLoginFormBody] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(loginFormBody);
    useAuthStore.getState().login("id", "", "아현");
    router.push("/home");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h3>로그인</h3>
      <div className={styles.item_container}>
        <input
          type="text"
          value={loginFormBody.email}
          onChange={(e) => {
            setLoginFormBody((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <span>이메일 주소를 다시 확인해주세요</span>
      </div>
      <div className={styles.item_container}>
        <input
          type="password"
          value={loginFormBody.password}
          onChange={(e) => {
            setLoginFormBody((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <span>비밀번호를 다시 확인해주세요</span>
      </div>
      <button className="white_button" type="submit">
        확인
      </button>
      <Link href="register">회원가입 하러가기</Link>
      <AlertBox content="해당 사용자를 찾을 수 없습니다" />
    </form>
  );
}

export default LoginPage;
