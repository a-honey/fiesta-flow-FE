import React from "react";
import styles from "./index.module.css";
import FestivalChip from "./FestivalChip";

function StoragePage() {
  return (
    <>
      <div className={styles.container}>
        <FestivalChip />
        <FestivalChip />
        <FestivalChip />
        <FestivalChip />
      </div>
    </>
  );
}

export default StoragePage;
