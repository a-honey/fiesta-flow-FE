import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import search_blue from "@/app/assets/search_blue.svg";

const SearchTab = () => {
  return (
    <div className={styles.search_tab_container}>
      <input placeholder="어떤 축제에 가고 싶어?" />
      <Image src={search_blue} alt="Fiesta Flow logo" width={25} height={25} />
    </div>
  );
};

export default SearchTab;
