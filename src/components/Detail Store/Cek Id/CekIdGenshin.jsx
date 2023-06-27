import React, { useContext, useState } from "react";
import "./css/IdGenshin.css";
import { UserContext } from "../../../userContext";
import { HelpButton } from "../../Button Help/ButtonHelp";

export default function CekIdGenshin() {
  const [playerName, setPlayerName] = useState("");
  const [server, setServer] = useState("");
  const { updateUser } = useContext(UserContext);
  const [showImage, setShowImage] = useState(false);
  const imageGenshin =
    "https://cdn1.codashop.com/S/content/common/images/helpers/183.png";

  const handlePlayerNameChange = (e) => {
    const name = e.target.value;
    setPlayerName(name);
    updateUser({ playerName: name, server });
  };

  const handleServerChange = (e) => {
    const selectedServer = e.target.value;
    setServer(selectedServer);
    updateUser({ playerName, server: selectedServer });
  };

  const handleClick = () => {
    setShowImage(!showImage);
  };
  return (
    <div className="container-genshin">
      <div className="container-uid">
        <input
          type="text"
          id="playerName"
          value={playerName}
          onChange={handlePlayerNameChange}
          placeholder="Masukan UID"
          required
        />
      </div>
      <div className="container-server">
        <select
          id="server"
          value={server}
          onChange={handleServerChange}
          required
        >
          <option value="">Select server</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </select>
      </div>
      <div>
        <HelpButton onClick={handleClick} active={showImage} />
      </div>
      <p>
        Untuk menemukan UID Anda, masuk pakai akun Anda. Klik pada tombol
        profile di pojok kiri atas layar. Temukan UID dibawah avatar. Masukan
        UID Anda di sini. Selain itu, Anda juga dapat temukan UID Anda di pojok
        bawah kanan layar.
      </p>
      {showImage && <img src={imageGenshin} alt="genshin" />}
    </div>
  );
}
