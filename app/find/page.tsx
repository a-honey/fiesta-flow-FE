"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import SearchTab from "./SearchTab";
import FestivalChip from "./FestivalChip";
import ActiveFestivalChip from "./ActiveFestivalChip";
import curation1 from "@/app/assets/curation1.jpg";
import curation2 from "@/app/assets/curation2.jpg";
import curation3 from "@/app/assets/curation3.jpg";
import curation4 from "@/app/assets/curation4.jpg";

const FESTIVAL_LIST = [
  {
    imageUrl: curation1,
    addr1: "서울특별시 마포구 여의도",
    title: "서울 불꽃 축제",
  },
  {
    imageUrl: curation2,
    addr1: "서울특별시 송파구 석촌호수",
    title: "석촌호수 벚꽃 축제",
  },
  {
    imageUrl: curation3,
    addr1: "경기도 남양주시",
    title: "남양주 낭만등불축제",
  },
  {
    imageUrl: curation4,
    addr1: "부산광역시 전체",
    title: "월드 디제이 페스티벌",
  },
];

function FindPage() {
  const [currentFestivalIndex, setCurrentFestivalIndex] = useState<
    null | number
  >(null);

  const handleFestivalClick = (index: number) => {
    setCurrentFestivalIndex(index);
  };

  return (
    <>
      <SearchTab />
      <ul className={styles.festival_container}>
        {FESTIVAL_LIST.map((item, index) => {
          if (currentFestivalIndex === index) {
            return <ActiveFestivalChip key={item.title} data={item} />;
          }
          return (
            <FestivalChip
              key={item.title}
              data={item}
              handleFestivalClick={handleFestivalClick}
              index={index}
            />
          );
        })}
      </ul>
    </>
  );
}

export default FindPage;
