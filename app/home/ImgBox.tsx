import React from "react";
import styles from "./index.module.css";
import ImgSlider from "./ImgSlider";

const ImgBox = () => {
  return (
    <section className={styles.container}>
      <h3>오늘의 큐레이션</h3>
      <ImgSlider />
    </section>
  );
};

export default ImgBox;
