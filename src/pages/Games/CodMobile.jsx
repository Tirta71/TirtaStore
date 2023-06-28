import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
export default function CodMobile() {
  const codMobile = dataGameCard[6];
  const topUpCod = TopUpList[6];
  return (
    <DetailStore
      title={codMobile.title}
      image={codMobile.image}
      genre={codMobile.genre}
      rating={codMobile.rating}
      slug={codMobile.slug}
      deskripsi={codMobile.deskripsi}
      topUpList={topUpCod.item}
    />
  );
}
