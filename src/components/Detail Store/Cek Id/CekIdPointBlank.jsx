import React, { useContext, useState } from "react";
import "./css/IdValorant.css";
import { UserContext } from "../../../userContext";
import "./css/IdValorant.css";
import { HelpButton } from "../../Button Help/ButtonHelp";

export default function CekIdPointBlank() {
  const [idPointBlank, setIdPointBlank] = useState("");
  const [showImage, setShowImage] = useState(false);
  const { updateUser } = useContext(UserContext);

  const ImagePointBlank =
    "https://cdn1.codashop.com/S/content/common/images/helpers/113.png";

  const handlePlayerNameChange = (e) => {
    setIdPointBlank(e.target.value);
  };

  const handleBlur = () => {
    if (idPointBlank) {
      updateUser({ idPb: idPointBlank });
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
          id="idPointBlank"
          value={idPointBlank}
          onChange={handlePlayerNameChange}
          onBlur={handleBlur}
          placeholder="Masukkan ID Point Blank"
          required
        />
        <HelpButton onClick={handleClick} active={showImage} />
      </div>
      <p>
        Untuk menemukan Zepetto ID Anda, silakan kunjungi Halaman Beranda kami
        dan log-in, Kemudian Anda dapat lihat Zepetto ID Anda tercantum di pojok
        atas kanan layar.
      </p>
      {showImage && <img src={ImagePointBlank} alt="Point Blank" />}
    </div>
  );
}
