import React from "react";
import SearchTab from "./SearchTab";
import FestivalChip from "./FestivalChip";

function FindPage() {
  return (
    <>
      <SearchTab />
      <ul>
        <FestivalChip />
        <FestivalChip />
      </ul>
    </>
  );
}

export default FindPage;
