import Image from "next/image";
import styles from "./index.module.css";
import bookmark from "@/app/assets/bookmark.svg";
import festivalItemImg from "@/app/assets/curation1.jpg";

const FestivalChip = () => {
  return (
    <div className={styles.chip}>
      <div className={styles.image_container}>
        <Image
          className={styles.bookmark}
          src={bookmark}
          alt="bookmark"
          width={25}
          height={25}
        />
        <Image
          src={festivalItemImg}
          alt="bookmark"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <h4>축제명</h4>
        <h5>위치</h5>
      </div>
    </div>
  );
};

export default FestivalChip;
