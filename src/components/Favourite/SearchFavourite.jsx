import React from "react";

export default function SearchFavourite() {
  return (
    <div className="uk-width-1-1">
      <div className="search">
        <div className="search__input">
          <i className="ico_search"></i>
          <input type="search" name="search" placeholder="Search" />
        </div>
        <div className="search__btn">
          <button type="button">
            <i className="ico_microphone"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
