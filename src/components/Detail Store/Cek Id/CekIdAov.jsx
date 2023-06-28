import React, { useContext, useState } from "react";
import "./css/IdValorant.css";
import { UserContext } from "../../../userContext";
import { HelpButton } from "../../Button Help/ButtonHelp";

export default function CekIdAov() {
  const [idAov, setIdAov] = useState("");
  const { updateUser } = useContext(UserContext);
  const [showImage, setShowImage] = useState(false);

  const handlePlayerNameChange = (e) => {
    setIdAov(e.target.value);
  };

  const handleBlur = () => {
    if (idAov) {
      updateUser({ idAov });
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
          id="idAov"
          value={idAov}
          onChange={handlePlayerNameChange}
          onBlur={handleBlur}
          placeholder="Masukan Player Id"
          required
        />
        <HelpButton onClick={handleClick} active={showImage} />
      </div>

      <p>
        <i>
          Untuk menemukan User ID Anda, Ketuk ikon pengaturan, scroll ke bawah,
          temukan bagian "Umum", lalu Klik "Player ID". Contoh:
          "888347346994333".
        </i>
      </p>
      {showImage && (
        <img
          src="https://cdn1.codashop.com/S/content/common/images/helpers/32.png"
          alt="codm"
        />
      )}
    </div>
  );
}
