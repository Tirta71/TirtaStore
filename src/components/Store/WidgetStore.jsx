import React, { useState } from "react";

export default function WidgetStore({
  searchQuery,
  onSearchChange,
  filteredData,
  onCategoryChange,
}) {
  const genres = [...new Set(filteredData.map((item) => item.genre))];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onCategoryChange(category); // Mengirim nilai kategori ke komponen lain
  };

  console.log("category", onCategoryChange);
  return (
    <div className="widjet --filters">
      <div className="widjet__head">
        <h3 className="uk-text-lead">Games Store</h3>
      </div>
      <div className="widjet__body">
        <div
          className="uk-grid uk-child-width-1-6@xl uk-child-width-1-3@l uk-child-width-1-2@s uk-flex-middle uk-grid-small"
          data-uk-grid
        >
          <div className="uk-width-1-1">
            <div className="search">
              <div className="search__input">
                <i className="ico_search"></i>
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={onSearchChange}
                />
              </div>
              <div className="search__btn">
                <button type="button">
                  <i className="ico_microphone"></i>
                </button>
              </div>
            </div>
          </div>

          <div>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              style={{
                backgroundColor: "#f5f5f5",
                border: "none",
                borderRadius: "5px",
                padding: "0.7rem",
                color: "#333",
                fontSize: "14px",
                paddingRight: "1rem",
              }}
            >
              <option value="">Category: All</option>
              {genres.map((genre) => (
                <option
                  key={genre}
                  value={genre}
                  style={{
                    backgroundColor: "#fff",
                    color: "#333",
                  }}
                >
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="uk-text-right">
            <a href="#!">{filteredData.length} item</a>
          </div>
        </div>
      </div>
    </div>
  );
}
