import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import UserForm from "./components/admin/Admin";
import HiggsDomino from "./pages/Games/HiggsDomino";
import PointBlank from "./pages/Games/PointBlank";
import CodMobile from "./pages/Games/CodMobile";
import ArenaOfValor from "./pages/Games/ArenaOfValor";

function App() {
  const userId = localStorage.getItem("userId");
  const isLoggedIn = !!userId;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home isLoggedIn={isLoggedIn} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
        <Route
          path="/register"
          element={<Register isLoggedIn={isLoggedIn} />}
        />
        <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
        <Route
          path="/favourites"
          element={<Favorite isLoggedIn={isLoggedIn} />}
        />
        <Route path="/wallet" element={<Wallet isLoggedIn={isLoggedIn} />} />
        <Route path="/store" element={<Store isLoggedIn={isLoggedIn} />} />
        <Route
          path="/detail-store"
          element={<DetailStore isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/mobile-legend"
          element={<MobileLegends isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/valorant"
          element={<Valorant isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/genshin-impact"
          element={<GenshinImpact isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/pubg-mobile"
          element={<PubgMobile isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/higgs-domino"
          element={<HiggsDomino isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/point-blank"
          element={<PointBlank isLoggedIn={isLoggedIn} />}
        />
        <Route path="/cod-m" element={<CodMobile isLoggedIn={isLoggedIn} />} />
        <Route path="/aov" element={<ArenaOfValor isLoggedIn={isLoggedIn} />} />
        <Route path="/admin" element={<UserForm isLoggedIn={isLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
