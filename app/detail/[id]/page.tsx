import React, { useState } from "react";

export default function DetailPage(props: any) {
  console.log("다이나믹 라우팅", props.params.id);
  return (
    <>
      <div>
        <h2>서울 재즈 페스티벌</h2>
        <h3>여름에 즐기는 귀가 즐거운 음악 페스티벌!</h3>
      </div>
      <div>날짜</div>
      <h4>내용</h4>
      <div>더보기</div>
      <div>
        <div>공유</div>
        <div>저장</div>
      </div>
    </>
  );
}
