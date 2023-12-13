import Image from "next/image";
import styles from "./index.module.css";
import festivalItemImg from "@/app/assets/curation1.jpg";

const FestivalChip = () => {
  return (
    <div className={styles.chip}>
      <Image
        src={festivalItemImg}
        alt="페스티벌이미지"
        width={200}
        height={150}
      />
    </div>
  );
};

export default FestivalChip;
