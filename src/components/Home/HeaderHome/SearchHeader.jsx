import React, { useState } from "react";

import { dataGameCard } from "../../../Data/dataGameCard";
import "./searchHeader.css";
import ContentHeader from "./ContentHeader";

export default function SearchHeader() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = dataGameCard.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="page-header__search">
        <div className="search">
          <div className="search__input">
            <i className="ico_search"></i>
            <input
              type="search"
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div>
        <ContentHeader searchTerm={searchTerm} filteredData={filteredData} />
      </div>
    </>
  );
}
