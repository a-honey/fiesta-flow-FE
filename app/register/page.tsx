"use client";
import React, { useState } from "react";
import styles from "./index.module.css";

function RegisterPage() {
  const [registerFormBody, setRegisterFormBody] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
  });

  return (
    <form className={styles.container}>
      <div className={styles.item_container}>
        <label>이메일 주소를 입력해주세요</label>
        <input type="text" />
        <span>이메일 주소를 다시 확인해주세요</span>
      </div>
      {registerFormBody.email && (
        <>
          <label>비밀번호를 입력해주세요</label>
          <input type="password" placeholder="비밀번호 입력" />
          <span>6자 이상 입력해주세요</span>
          <input type="password" placeholder="비밀번호 확인" />
          <span>비밀번호와 동일하게 입력해주세요</span>
        </>
      )}
      {registerFormBody.password && (
        <>
          <label>이름을 설정해주세요</label>
          <input type="text" placeholder="이름" />
        </>
      )}
      <button className="white_button">다음</button>
    </form>
  );
}

export default RegisterPage;
