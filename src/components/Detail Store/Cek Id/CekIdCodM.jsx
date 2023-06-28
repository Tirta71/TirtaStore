import React, { useContext, useState } from "react";
import "./css/IdValorant.css";
import { UserContext } from "../../../userContext";
import { HelpButton } from "../../Button Help/ButtonHelp";

export default function CekIdCodM() {
  const [idCod, setIdCod] = useState("");
  const { updateUser } = useContext(UserContext);
  const [showImage, setShowImage] = useState(false);

  const handlePlayerNameChange = (e) => {
    setIdCod(e.target.value);
  };

  const handleBlur = () => {
    if (idCod) {
      updateUser({ idCod });
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
          id="idCod"
          value={idCod}
          onChange={handlePlayerNameChange}
          onBlur={handleBlur}
          placeholder="Masukan Player Id"
          required
        />
        <HelpButton onClick={handleClick} active={showImage} />
      </div>

      <p>
        <i>
          Untuk menemukan PlayerID Anda, klik ikon 'settings' yang terletak di
          sebelah kanan layar dan klik tab 'LEGAL AND PRIVCY', Anda dapat
          menemukan PlayerID Anda di sini.
        </i>
      </p>
      {showImage && (
        <img
          src="https://cdn1.codashop.com/S/content/common/images/helpers/90.png"
          alt="codm"
        />
      )}
    </div>
  );
}
