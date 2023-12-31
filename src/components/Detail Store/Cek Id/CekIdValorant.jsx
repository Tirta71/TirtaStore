import React, { useContext, useState } from "react";
import "./css/IdValorant.css";
import { UserContext } from "../../../userContext";
import { HelpButton } from "../../Button Help/ButtonHelp";

export default function CekIdValorant() {
  const [playerName, setPlayerName] = useState("");
  const { updateUser } = useContext(UserContext);
  const [showImage, setShowImage] = useState(false);

  const valoImage =
    "https://cdn1.codashop.com/S/content/common/images/helpers/139.png";

  const handlePlayerNameChange = (e) => {
    setPlayerName(e.target.value);
  };

  const handleBlur = () => {
    if (playerName) {
      updateUser({ playerName });
    }
  };

  const handleClick = () => {
    setShowImage(!showImage);
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
        <HelpButton onClick={handleClick} active={showImage} />
      </div>

      <p>
        Untuk menemukan Riot ID Anda, buka halaman profil akun dan salin Riot
        ID+Tag menggunakan tombol yang tersedia disamping Riot ID.
        <br />
        Contoh: TIRTA#FIRE
      </p>
      {showImage && <img src={valoImage} alt="valo" />}
    </div>
  );
}
