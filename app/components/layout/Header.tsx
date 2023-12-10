import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import notification from "@/app/assets/notification.png";

const Header = () => {
  return (
    <header className={styles.container}>
      <Image
        src={notification}
        alt="Fiesta Flow logo"
        width={18}
        height={21.5}
      />
      <div>프로필</div>
    </header>
  );
};

export default Header;
