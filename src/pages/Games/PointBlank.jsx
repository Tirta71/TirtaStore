import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
export default function PointBlank() {
  const pointBlank = dataGameCard[5];
  const pointTopUp = TopUpList[5];
  return <DetailStore game={pointBlank} topUpList={pointTopUp.item} />;
}
