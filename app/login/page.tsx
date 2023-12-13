"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
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
    <form onSubmit={handleSubmit} className={styles.container}>
      <h3>로그인</h3>
      <div className={styles.item_container}>
        <input type="text" />
        <span>이메일 주소를 다시 확인해주세요</span>
      </div>
      <div className={styles.item_container}>
        <input type="text" />
        <span>비밀번호를 다시 확인해주세요</span>
      </div>
      <button className="white_button" type="submit">
        확인
      </button>
      <AlertBox content="해당 사용자를 찾을 수 없습니다" />
    </form>
  );
}

export default LoginPage;
