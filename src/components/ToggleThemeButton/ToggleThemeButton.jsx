import React, { useState, useEffect } from "react";

export function ToggleTheme() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const handleToggleClick = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.getElementsByTagName("body")[0].classList.toggle("dark-theme");
  };

  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.classList.toggle("dark-theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <input
      id="toggle"
      type="checkbox"
      checked={isDarkMode}
      onChange={handleToggleClick}
    />
  );
}
