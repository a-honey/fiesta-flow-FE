import React from "react";
import Link from "next/link";
import styles from "./index.module.css";

const TestBanner = () => {
  return (
    <Link href="/festival">
      <section className={styles.container}>
        <div>축제 취향 테스트</div>
        <div>나의 축제 취향은?</div>
      </section>
    </Link>
  );
};

export default TestBanner;
