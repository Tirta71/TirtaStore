import React from "react";
import HeaderHome from "../components/Home/HeaderHome";
import SideBar from "../components/SideBar/SideBar";
import Feature from "../components/Home/Feature";
import Trending from "../components/Home/Trending";
import PopularGames from "../components/Home/PopularGames";
import { ToggleTheme } from "../components/ToggleThemeButton/ToggleThemeButton";
import { useMediaQuery } from "react-responsive";
import HomeMobile from "../components/Home/Mobile/HomeMobile";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  return (
    <div className="page-home">
      <ToggleTheme />
      <div className="page-wrapper">
        <HeaderHome />

        <div className="page-content">
          <SideBar />
          <main className="page-main">
            {isMobile ? (
              <HomeMobile />
            ) : (
              <div className="uk-grid" data-uk-grid>
                <Feature />
                <Trending />
                <PopularGames />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
