import React, { useEffect } from "react";
import "./FormTopUp.css";
import GetIdForm from "../Cek Id/CekIdMobileLegend";

export default function FormTopUp({
  topUpList,
  selectedItem,
  handleItemSelect,
  setUsername,
  handleFormSubmit,
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

  console.log("test", topUpList[1]);

  return (
    <div className="widget__body">
      {title === "Mobile Legend" && (
        <GetIdForm setUsername={setUsername} onSubmit={handleFormSubmit} />
      )}

      <form onSubmit={handleSubmit}>
        <div className="widjet__body" style={{ marginTop: "2rem" }}>
          <div className="container-topUp">
            {topUpList &&
              topUpList.map((item) => (
                <div key={item.jumlah}>
                  <label>
                    <input
                      type="radio"
                      value={item.jumlah}
                      checked={selectedItem === item}
                      onChange={() => handleItemSelect(item)}
                    />
                    <div className="item-topup">
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

                      <span>Rp.{item.price.toLocaleString()}</span>
                    </div>
                  </label>
                </div>
              ))}
          </div>
        </div>
      </form>
    </div>
  );
}
