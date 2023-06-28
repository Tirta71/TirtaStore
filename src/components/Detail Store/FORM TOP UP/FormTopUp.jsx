import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./FormTopUp.css";
import GetIdForm from "../Cek Id/CekIdMobileLegend";
import CekIdValorant from "../Cek Id/CekIdValorant";
import CekIdGenshin from "../Cek Id/CekIdGenshin";
import CekIdPubgMobile from "../Cek Id/CekIdPubgMobile";
import CekIdHiggs from "../Cek Id/CekIdHiggs";
import CekIdPointBlank from "../Cek Id/CekIdPointBlank";
import CekIdCodM from "../Cek Id/CekIdCodM";
import CekIdAov from "../Cek Id/CekIdAov";

export default function FormTopUp({
  topUpList,
  selectedItem,
  handleItemSelect,
  title,
}) {
  useEffect(() => {
    if (selectedItem) {
      console.log("Item yang dipilih:", selectedItem);
    } else {
      console.log("Tidak ada item yang dipilih");
    }
  }, [selectedItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="widget__body">
      {title === "Mobile Legend" && <GetIdForm />}
      {title === "Valorant" && <CekIdValorant />}
      {title === "Genshin Impact" && <CekIdGenshin />}
      {title === "Pubg Mobile" && <CekIdPubgMobile />}
      {title === "Higgs Domino" && <CekIdHiggs />}
      {title === "Point Blank" && <CekIdPointBlank />}
      {title === "Call Of Duty" && <CekIdCodM />}
      {title === "Arena Of Valor" && <CekIdAov />}
      <form onSubmit={handleSubmit}>
        <div className="widjet__body" style={{ marginTop: "2rem" }}>
          <div className="container-topUp">
            {topUpList &&
              topUpList.map((item) => (
                <div key={item.id}>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value={item.jumlah}
                      checked={selectedItem === item}
                      onChange={() => handleItemSelect(item)}
                    />
                    <motion.div
                      className="item-topup"
                      whileTap={{ scale: 1 }}
                      initial={{ scale: 0.9 }}
                      animate={
                        selectedItem === item ? { scale: 1 } : { scale: 0.9 }
                      }
                      transition={{ duration: 0.3 }}
                    >
                      <img src={item.image} alt={`Diamond ${item.jumlah}`} />
                      {title === "Mobile Legend" && (
                        <span> {item.jumlah} Diamond</span>
                      )}
                      {title === "Valorant" && <span>{item.jumlah} Point</span>}
                      {title === "Pubg Mobile" && (
                        <span>{item.jumlah} UC </span>
                      )}
                      {title === "Genshin Impact" && (
                        <span>{item.jumlah} Genesis </span>
                      )}
                      {title === "Higgs Domino" && (
                        <span>{item.jumlah}M Koin Emas-D</span>
                      )}
                      {title === "Point Blank" && (
                        <span>{item.jumlah} CASH</span>
                      )}
                      {title === "Call Of Duty" && (
                        <span>{item.jumlah} CP</span>
                      )}
                      <span>Rp.{item.price.toLocaleString()}</span>
                    </motion.div>
                  </label>
                </div>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
}
