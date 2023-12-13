import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import profile from "@/app/assets/profile.svg";
import edit from "@/app/assets/edit.svg";
import BookedFestivalChip from "./BookedFestivalChip";

function MyPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.festival_chip_container}>
          <Image src={profile} alt="프로필 이미지" width={100} height={100} />
          <div className={styles.festival_chip_title}>
            <div>이름</div>
            <Link href="#">
              <Image
                src={edit}
                alt="프로필 수정 이동 아이콘"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
        <ul className={styles.festival_list_container}>
          <BookedFestivalChip />
        </ul>
      </div>
    </>
  );
}

export default MyPage;
