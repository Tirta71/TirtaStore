import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/Profile";
import Favorite from "./pages/Favorite";
import Wallet from "./pages/Wallet";
import Store from "./pages/Store";
import DetailStore from "./pages/Detail Store/DetailStore";
import MobileLegends from "./pages/Games/MobileLegends";
import Valorant from "./pages/Games/Valorant";
import GenshinImpact from "./pages/Games/GenshinImpact";
import PubgMobile from "./pages/Games/PubgMobile";
import Login from "./pages/USER/Login/Login";
import Register from "./pages/USER/Register/Register";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favorite />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/store" element={<Store />} />
        <Route path="/detail-store" element={<DetailStore />} />
        <Route path="/mobile-legend" element={<MobileLegends />} />
        <Route path="/valorant" element={<Valorant />} />
        <Route path="/genshin-impact" element={<GenshinImpact />} />
        <Route path="/pubg-mobile" element={<PubgMobile />} />
      </Routes>
    </Router>
  );
}

export default App;
