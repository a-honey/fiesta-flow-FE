"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import curation1 from "@/app/assets/curation1.jpg";
import curation2 from "@/app/assets/curation2.jpg";
import curation3 from "@/app/assets/curation3.jpg";
import curation4 from "@/app/assets/curation4.jpg";
import curation5 from "@/app/assets/curation5.jpg";

const IMG_DATA = [
  { curationSrc: curation1, curationTitle: "이번 달 추천 축제1" },
  { curationSrc: curation2, curationTitle: "이번 달 추천 축제2" },
  { curationSrc: curation3, curationTitle: "이번 달 추천 축제3" },
  { curationSrc: curation4, curationTitle: "이번 달 추천 축제4" },
  { curationSrc: curation5, curationTitle: "이번 달 추천 축제5" },
];

const ImgSlider = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(2);

  return (
    <div className={styles.imgSliderContainer}>
      {IMG_DATA.map((item, index) => (
        <Image
          key={item.curationTitle}
          src={item.curationSrc}
          alt={item.curationTitle}
          width={index === activeImgIndex ? 200 : 25}
          height={600}
          onClick={() => {
            setActiveImgIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default ImgSlider;
