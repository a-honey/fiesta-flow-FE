import Image from "next/image";
import styles from "./index.module.css";

const ImageSelectModal = () => {
  return (
    <div className={styles.modal_container}>
      <h4>프로필 이미지를 선택해주세요</h4>
      <div className={styles.image_grid_container}>
        <div>이미지</div>
        <div>이미지</div>
        <div>이미지</div>
        <div>이미지</div>
        <div>이미지</div>
        <div>이미지</div>
      </div>
      <div className={styles.btns_container}>
        <button>취소</button>
        <button>저장</button>
      </div>
    </div>
  );
};

export default ImageSelectModal;
