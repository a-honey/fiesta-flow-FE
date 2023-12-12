import Image from "next/image";
import styles from "./index.module.css";
import bookmark from "@/app/assets/bookmark.svg";
import festivalItemImg from "@/app/assets/curation1.jpg";

const FestivalChip = () => {
  return (
    <div className={styles.chip}>
      <Image
        src={festivalItemImg}
        alt="페스티벌이미지"
        width={270}
        height={300}
      />
    </div>
  );
};

export default FestivalChip;
