import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import splash from "@/app/assets/splash.jpg";

function HomePage() {
  return (
    <>
      <Image
        src={splash}
        alt="온보딩 이미지"
        height={700}
        className={styles.splash_image}
      />
      <div className={styles.logo}>Fiesta Flow</div>
      <Link href="/home" className={`white_button`}>
        시작하기
      </Link>
    </>
  );
}

export default HomePage;
