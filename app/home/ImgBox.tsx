import React from "react";
import styles from "./index.module.css";
import ImgSlider from "./ImgSlider";

const ImgBox = () => {
  return (
    <section className={styles.container}>
      <div>오늘의 큐레이션</div>
      <ImgSlider />
    </section>
  );
};

export default ImgBox;
