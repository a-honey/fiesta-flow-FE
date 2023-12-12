"use client";
import Image from "next/image";
import React, { useState } from "react";
import arrow_left from "@/app/assets/arrow_left.svg";
import AlertBox from "./AlertBox";

function LoginPage() {
  const [loginFormBody, setLoginFormBody] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(loginFormBody);
  };
  return (
    <>
      <Image src={arrow_left} alt="뒤로가기" width={25} height={25} />
      <form onSubmit={handleSubmit}>
        <h3>로그인</h3>
        <input type="text" />
        <span>이메일 주소를 다시 확인해주세요</span>
        <input type="text" />
        <span>비밀번호를 다시 확인해주세요</span>
        <button type="submit">다음</button>
        <AlertBox content="해당 사용자를 찾을 수 없습니다" />
      </form>
    </>
  );
}

export default LoginPage;
