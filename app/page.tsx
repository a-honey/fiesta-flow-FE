import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import splash from "@/app/assets/splash.jpg";
import logo_text from "@/app/assets/logo_text.svg";

function HomePage() {
  return (
    <section className={styles.black}>
      <Image
        src={splash}
        alt="온보딩 이미지"
        height={800}
        className={styles.splash_image}
      />
      <Image src={logo_text} alt="온보딩 이미지" className={styles.logo} />
      <Link href="/home" className={`white_button`}>
        시작하기
      </Link>
    </section>
  );
}

export default HomePage;
