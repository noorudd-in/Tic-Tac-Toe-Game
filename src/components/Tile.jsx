import React from "react";
import "../App.css";

const Tile = ({ classname, value, handleClick, index, winnerIndex }) => {
  return (
    <div
      className={`tile text-4xl flex justify-center items-center ${classname} ${
        (winnerIndex[0] == index ||
          winnerIndex[1] == index ||
          winnerIndex[2] == index) &&
        "bg-orange-400"
      }`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default Tile;
