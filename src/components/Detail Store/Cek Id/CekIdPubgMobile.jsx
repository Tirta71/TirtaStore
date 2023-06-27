import React, { useContext, useState } from "react";
import { UserContext } from "../../../userContext";
import { HelpButton } from "../../Button Help/ButtonHelp";

export default function CekIdPubgMobile() {
  const [idGame, setIdGame] = useState("");
  const { updateUser } = useContext(UserContext);
  const [showImage, setShowImage] = useState(false);
  const handlePlayerNameChange = (e) => {
    setIdGame(e.target.value);
  };

  const handleBlur = () => {
    if (idGame) {
      updateUser({ idGame });
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
          id="idGame"
          value={idGame}
          onChange={handlePlayerNameChange}
          onBlur={handleBlur}
          placeholder="Masukan User Id Pubg "
          required
        />
        <HelpButton onClick={handleClick} active={showImage} />
      </div>
      <p>
        Cara Top Up PUBG Mobile
        <ul>
          <li> 1. Masukkan USER ID</li>
          <li> 2. Pilih Jumlah Nominal UC</li>
        </ul>
        <p>Tunggu Beberapa Saat UC Akan Otomatis Masuk Ke Akun Anda.</p>
      </p>
      {showImage && (
        <img
          src="https://latomstore.id/assets/img/idserver/1638299666.png"
          alt="pubg"
        />
      )}
    </div>
  );
}
