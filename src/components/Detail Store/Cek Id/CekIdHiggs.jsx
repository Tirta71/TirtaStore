import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../userContext";
import "./css/IdHiggs.css";
export default function CekIdHiggs() {
  const [playerId, setPlayerId] = useState("");
  const [idHigs, setIdHigs] = useState([]);
  const { updateUser } = useContext(UserContext);

  const handlePlayerIdChange = (e) => {
    setPlayerId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://v1.apigames.id/merchant/M230213DIHV6649WV/cek-username/higgs?user_id=${playerId}&signature=7e3d1b5350485f4307d2f2086c49cb95`
      );

      const username = response.data?.data?.username;

      setIdHigs([{ username }]);

      updateUser({ usernameHiggs: username, idHigs: playerId });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container-higgs">
      <form onSubmit={handleSubmit} className="container-form-higgs">
        <input
          type="text"
          id="playerId"
          value={playerId}
          onChange={handlePlayerIdChange}
          placeholder="Masukkan ID Higgs"
          required
        />
        <button type="submit">Cek ID</button>
      </form>

      {idHigs.length > 0 && (
        <div>
          <p>
            username:
            {idHigs[0]?.username}
          </p>
        </div>
      )}
      <span>
        Untuk menemukan User ID, ketuk Avatar Anda di sudut kiri atas layar
        utama. User ID tercantum dibawah avatar Anda. Masukan User ID Anda
        disini. Contoh: "1234567".
      </span>
    </div>
  );
}
