import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <div>Fiesta Flow</div>
      <Link href="/home" className="white_button">
        시작하기
      </Link>
    </>
  );
}

export default HomePage;
