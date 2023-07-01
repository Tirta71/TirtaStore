import React, { useContext, useState } from "react";
import { UserContext } from "../../../userContext";
import { HelpButton } from "../../Button Help/ButtonHelp";

export default function CekIdFreeFire() {
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
          placeholder="Masukan User Id Free Fire "
          required
        />
        <HelpButton onClick={handleClick} active={showImage} />
      </div>
      <p>
        Untuk menemukan ID Anda, klik pada ikon karakter. User ID tercantum di
        bawah nama karakter Anda. Contoh: '5363266446'.
      </p>
      {showImage && (
        <img
          src="https://cdn1.codashop.com/S/content/common/images/helpers/33.png"
          alt="pubg"
        />
      )}
    </div>
  );
}
