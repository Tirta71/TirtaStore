import React from "react";
import HeaderHome from "../components/Home/HeaderHome";
import SideBar from "../components/SideBar/SideBar";
import Feature from "../components/Home/Feature";
import Trending from "../components/Home/Trending";
import PopularGames from "../components/Home/PopularGames";
import { ToggleTheme } from "../components/ToggleThemeButton/ToggleThemeButton";

export default function Home() {
  return (
    <div className="page-home">
      <ToggleTheme />
      <div className="page-wrapper">
        <HeaderHome />

        <div className="page-content">
          <SideBar />
          <main className="page-main">
            <div className="uk-grid" data-uk-grid>
              <Feature />
              <Trending />
              <PopularGames />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
