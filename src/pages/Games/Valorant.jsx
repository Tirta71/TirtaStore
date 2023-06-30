import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
export default function Valorant() {
  const valorant = dataGameCard[1];
  const ValoTopUp = TopUpList[1];

  return <DetailStore game={valorant} topUpList={ValoTopUp.item} />;
}
