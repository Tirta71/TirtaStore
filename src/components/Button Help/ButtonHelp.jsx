import React from "react";
import "./buttonHelp.css";
export const HelpButton = ({ onClick, active }) => {
  return (
    <button onClick={onClick} className={active ? "button-active" : ""}>
      Bantuan ?
    </button>
  );
};
