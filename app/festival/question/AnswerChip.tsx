import React from "react";
import styles from "./index.module.css";

const AnswerChip = ({ answer }: { answer: string }) => {
  return (
    <li key={answer} className={styles.question_chip}>
      {answer}
    </li>
  );
};

export default AnswerChip;
