import React, { useState } from "react";
import { ToggleTheme } from "../../components/ToggleThemeButton/ToggleThemeButton";
import HeaderHome from "../../components/Home/HeaderHome";
import SideBar from "../../components/SideBar/SideBar";
import TotalPrice from "../../components/Detail Store/TotalPrice";
import GameProfile from "../../components/Detail Store/GameProfile";
import FormTopUp from "../../components/Detail Store/FORM TOP UP/FormTopUp";
import { UserProvider } from "../../userContext";
export default function DetailStore({
  title,
  genre,
  rating,
  image,
  deskripsi,
  topUpList,
  slug,
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <UserProvider>
      <div className="page-store">
        <ToggleTheme />

        <div className="page-wrapper">
          <HeaderHome />
          <div className="page-content">
            <SideBar />
            <main className="page-main">
              <ul className="uk-breadcrumb">
                <li>
                  <a href="/store">
                    <span data-uk-icon="chevron-left"></span>
                    <span>Back to Store</span>
                  </a>
                </li>
                <li>
                  <span>{title}</span>
                </li>
              </ul>
              <h3 className="uk-text-lead">{title}</h3>
              <div className="uk-grid uk-grid-small" data-uk-grid>
                <div className="uk-width-2-3@s">
                  <FormTopUp
                    topUpList={topUpList}
                    title={title}
                    selectedItem={selectedItem}
                    handleItemSelect={handleItemSelect}
                  />
                </div>

                <div className="uk-width-1-3@s">
                  <GameProfile
                    genre={genre}
                    rating={rating}
                    image={image}
                    deskripsi={deskripsi}
                  />
                  <TotalPrice
                    title={title}
                    genre={genre}
                    rating={rating}
                    image={image}
                    slug={slug}
                    item={selectedItem ? selectedItem : 0}
                    selectedItem={selectedItem}
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}
