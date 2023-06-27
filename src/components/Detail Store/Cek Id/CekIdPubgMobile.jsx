import React, { useContext, useState } from "react";
import { UserContext } from "../../../userContext";

export default function CekIdPubgMobile() {
  const [idGame, setIdGame] = useState("");
  const { updateUser } = useContext(UserContext);

  const handlePlayerNameChange = (e) => {
    setIdGame(e.target.value);
  };

  const handleBlur = () => {
    if (idGame) {
      updateUser({ idGame });
    }
  };
  return (
    <div className="container-valorant">
      <div className="container-idVal">
        <input
          type="text"
          id="idGame"
          value={idGame}
          onChange={handlePlayerNameChange}
          onBlur={handleBlur}
          placeholder="Masukan User Id Pubg "
          required
        />
      </div>
      <p>
        Cara Top Up PUBG Mobile
        <ul>
          <li> 1. Masukkan USER ID</li>
          <li> 2. Pilih Jumlah Nominal UC</li>
        </ul>
        <p>Tunggu Beberapa Saat UC Akan Otomatis Masuk Ke Akun Anda.</p>
      </p>
    </div>
  );
}
