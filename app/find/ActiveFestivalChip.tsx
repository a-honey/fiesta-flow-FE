import Image from "next/image";
import styles from "./index.module.css";
import bookmark from "@/app/assets/bookmark.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const ActiveFestivalChip = ({
  data,
}: {
  data: { imageUrl: string | StaticImport; addr1: string; title: string };
}) => {
  return (
    <div className={styles.active_chip}>
      <div className={styles.active_chip_image_container}>
        <Image src={data.imageUrl} alt={data.title} width={200} height={250} />
        <Image
          className={styles.active_chip_bookmark}
          src={bookmark}
          alt="보관 아이콘"
          width={25}
          height={25}
        />
      </div>
      <div className={styles.active_chip_content_container}>
        <div className={styles.active_chip_content_title}>{data.title}</div>
        <div className={styles.active_chip_content_address}>{data.addr1}</div>
      </div>
    </div>
  );
};

export default ActiveFestivalChip;
