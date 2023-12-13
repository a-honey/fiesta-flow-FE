import React from "react";
import styles from "./index.module.css";
import SearchTab from "./SearchTab";
import FestivalChip from "./FestivalChip";
import ActiveFestivalChip from "./ActiveFestivalChip";

function FindPage() {
  return (
    <>
      <SearchTab />
      <ul className={styles.festival_container}>
        <ActiveFestivalChip />
        <FestivalChip />
        <FestivalChip />
      </ul>
    </>
  );
}

export default FindPage;
