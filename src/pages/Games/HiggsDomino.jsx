import React from "react";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
import DetailStore from "../Detail Store/DetailStore";
export default function HiggsDomino() {
  const higgsDomino = dataGameCard[4];
  const higgsTopUp = TopUpList[4];
  return <DetailStore game={higgsDomino} topUpList={higgsTopUp.item} />;
}
