import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
export default function Valorant() {
  const valorant = dataGameCard[1];
  const ValoTopUp = TopUpList[1];
  return (
    <DetailStore
      title={valorant.title}
      genre={valorant.genre}
      rating={valorant.rating}
      image={valorant.image}
      deskripsi={valorant.deskripsi}
      topUpList={ValoTopUp.item}
    />
  );
}
