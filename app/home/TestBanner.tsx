import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import speech_balloon from "@/app/assets/speech_balloon.png";

const TestBanner = () => {
  return (
    <Link href="/festival">
      <section className={styles.container}>
        <h3>축제 취향 테스트</h3>
        <div className={styles.contentContainer}>
          <div className={styles.myFestival}>나의 축제 취향은?</div>
          <div className={styles.speech_balloon_container}>
            <Image
              className={styles.mini}
              src={speech_balloon}
              alt="Fiesta Flow logo"
              width={150}
              height={40}
            />
            <div>어디로 가볼까?</div>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default TestBanner;
