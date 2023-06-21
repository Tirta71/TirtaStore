import React, { useState, useEffect } from "react";
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

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      setIsLogin(true);
    }
  }, []);

  const PrivateRoute = ({ element: Element, ...rest }) => {
    return isLogin ? <Element {...rest} /> : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Home />} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
        <Route
          path="/favourites"
          element={<PrivateRoute element={<Favorite />} />}
        />
        <Route path="/wallet" element={<PrivateRoute element={<Wallet />} />} />
        <Route path="/store" element={<PrivateRoute element={<Store />} />} />
        <Route
          path="/detail-store"
          element={<PrivateRoute element={<DetailStore />} />}
        />
        <Route
          path="/mobile-legend"
          element={<PrivateRoute element={<MobileLegends />} />}
        />
        <Route
          path="/valorant"
          element={<PrivateRoute element={<Valorant />} />}
        />
        <Route
          path="/genshin-impact"
          element={<PrivateRoute element={<GenshinImpact />} />}
        />
        <Route
          path="/pubg-mobile"
          element={<PrivateRoute element={<PubgMobile />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
