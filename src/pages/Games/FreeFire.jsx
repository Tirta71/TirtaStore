import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
export default function FreeFire() {
  const FreeFire = dataGameCard[8];
  const topUpFreeFire = TopUpList[8];
  console.log(FreeFire);
  return <DetailStore game={FreeFire} topUpList={topUpFreeFire.item} />;
}
