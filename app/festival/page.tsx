import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo_white from "@/app/assets/logo_white.svg";

function FestivalPage() {
  return (
    <>
      <Image src={logo_white} alt="Fiesta Flow logo" width={55} height={30} />
      <div>
        <h3>나의 축제 취향은?</h3>
        <div>나의 축제 취향을 테스트하고</div>
        <div>내가 좋아할만한 축제 추천을 받아보세요!</div>
      </div>
      <button>
        <Link href="/festival/question">테스트 시작하기</Link>
      </button>
    </>
  );
}

export default FestivalPage;
