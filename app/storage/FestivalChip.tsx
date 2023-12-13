import Image from "next/image";
import styles from "./index.module.css";
import bookmark from "@/app/assets/bookmark.svg";
import festivalItemImg from "@/app/assets/curation1.jpg";

const FestivalChip = () => {
  return (
    <div className={styles.chip}>
      <Image
        className={styles.bookmark}
        src={bookmark}
        alt="bookmark"
        width={25}
        height={25}
      />
      <Image src={festivalItemImg} alt="bookmark" width={177} height={300} />
      <div>
        <h4>축제명</h4>
        <h5>위치</h5>
      </div>
    </div>
  );
};

export default FestivalChip;
