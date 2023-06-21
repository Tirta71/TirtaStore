import React, { useState } from "react";
import { dataGameCard } from "../Data/dataGameCard";
import GameStore from "../components/Store/GameStore";
import WidgetStore from "../components/Store/WidgetStore";
import SideBar from "../components/SideBar/SideBar";
import HeaderHome from "../components/Home/HeaderHome";
import { ToggleTheme } from "../components/ToggleThemeButton/ToggleThemeButton";

export default function Store() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = dataGameCard.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page-store">
      <ToggleTheme />

      <div className="page-wrapper">
        <HeaderHome />
        <div className="page-content">
          <SideBar />
          <main className="page-main">
            <WidgetStore
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              filteredData={filteredData}
            />
            <GameStore filteredData={filteredData} />
          </main>
        </div>
      </div>
    </div>
  );
}
