import React, { useContext, useState } from "react";
import "./css/IdValorant.css";
import { UserContext } from "../../../userContext";

export default function CekIdValorant() {
  const [playerName, setPlayerName] = useState("");
  const { updateUser } = useContext(UserContext);

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleBlur = () => {
    if (playerName) {
      updateUser({ playerName });
    }
  };

  return (
    <div className="container-valorant">
      <div className="container-idVal">
        <input
          type="text"
          id="playerName"
          value={playerName}
          onChange={handlePlayerNameChange}
          onBlur={handleBlur}
          placeholder="Masukan Riot ID anda"
          required
        />
      </div>
      <p>
        Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot
        ID+Tag menggunakan tombol yang tersedia disamping Riot ID.
        <br />
        Contoh: TIRTA#FIRE
      </p>
    </div>
  );
}
