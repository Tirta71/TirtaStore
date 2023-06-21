import React from "react";
import DetailStore from "../Detail Store/DetailStore";
import { dataGameCard } from "../../Data/dataGameCard";
import { TopUpList } from "../../Data/DataTopUp";
export default function PubgMobile() {
  const pubgMobile = dataGameCard[3];
  const PmTopUp = TopUpList[3];
  return (
    <DetailStore
      title={pubgMobile.title}
      genre={pubgMobile.genre}
      rating={pubgMobile.rating}
      image={pubgMobile.image}
      deskripsi={pubgMobile.deskripsi}
      topUpList={PmTopUp.item}
    />
  );
}
