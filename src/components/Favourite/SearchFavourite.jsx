import React, { useState } from "react";

export default function SearchFavourite({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="uk-width-1-1">
      <div className="search">
        <div className="search__input">
          <i className="ico_search"></i>
          <input
            type="search"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
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
