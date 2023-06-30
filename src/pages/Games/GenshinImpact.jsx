import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
export default function GenshinImpact() {
  const GenshinImpact = dataGameCard[2];
  const GmTopUp = TopUpList[2];
  return <DetailStore game={GenshinImpact} topUpList={GmTopUp.item} />;
}
