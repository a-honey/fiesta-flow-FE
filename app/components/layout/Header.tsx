import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import notification from "@/app/assets/notification.png";
import profile from "@/app/assets/profile.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.container}>
      <Image
        src={notification}
        alt="Fiesta Flow logo"
        width={18}
        height={21.5}
      />
      <Link href="/my">
        <Image src={profile} alt="Fiesta Flow logo" width={25} height={25} />
      </Link>
    </header>
  );
};

export default Header;
