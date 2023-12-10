import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.container}>
      <Link href="/find">
        <div className={styles.nav_item}>발견</div>
      </Link>
      <Link href="/">
        <Image src={logo} alt="Fiesta Flow logo" width={55} height={30} />
      </Link>
      <Link href="/storage">
        <div className={styles.nav_item}>보관함</div>
      </Link>
    </nav>
  );
};

export default Nav;
