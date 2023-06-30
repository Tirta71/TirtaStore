import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";

export default function MobileLegends() {
  const mobileLegend = dataGameCard[0];
  const MlTopUp = TopUpList[0];

  return <DetailStore game={mobileLegend} topUpList={MlTopUp.item} />;
}
