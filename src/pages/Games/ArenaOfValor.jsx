import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
export default function ArenaOfValor() {
  const aovMobile = dataGameCard[7];
  const topUpAov = TopUpList[7];
  return (
    <DetailStore
      title={aovMobile.title}
      image={aovMobile.image}
      rating={aovMobile.rating}
      deskripsi={aovMobile.deskripsi}
      slug={aovMobile.slug}
      genre={aovMobile.genre}
      topUpList={topUpAov.item}
    />
  );
}
