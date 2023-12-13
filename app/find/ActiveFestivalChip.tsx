import Image from "next/image";
import styles from "./index.module.css";
import bookmark from "@/app/assets/bookmark.svg";
import festivalItemImg from "@/app/assets/curation3.jpg";

const ActiveFestivalChip = () => {
  return (
    <div className={styles.active_chip}>
      <div className={styles.active_chip_image_container}>
        <Image
          src={festivalItemImg}
          alt="페스티벌이미지"
          width={200}
          height={250}
        />
        <Image
          className={styles.active_chip_bookmark}
          src={bookmark}
          alt="페스티벌이미지"
          width={25}
          height={25}
        />
      </div>
      <div className={styles.active_chip_content_container}>
        <div>축제명</div>
        <div>위치</div>
      </div>
    </div>
  );
};

export default ActiveFestivalChip;
