import Link from "next/link";
import { RESPONSE_DATA_TYPE } from "./page";

const ResultModal = ({ data }: { data: RESPONSE_DATA_TYPE }) => {
  return (
    <>
      <div></div>
      <div>추천축제이미지</div>
      <Link href="/festival" className="white_button">
        다시하기
      </Link>
    </>
  );
};

export default ResultModal;
