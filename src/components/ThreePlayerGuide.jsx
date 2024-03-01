import React, { useState } from "react";

const ThreePlayerGuide = () => {
  const [showGuide, setShowGuide] = useState(false);
  return (
    <div className="mb-2 text-center" onClick={() => setShowGuide(!showGuide)}>
      <button className="p-2 m-2 bg-orange-500 text-orange-950 text-sm rounded-lg">
        How to play? {showGuide ? "👆" : "👇"}
      </button>
      {showGuide && (
        <h1>
          The grid is 4x4 but the rules is same as of 3x3 grid. If any player
          succeeds in placing three of their marks in a horizontal, vertical, or
          diagonal row is the winner.
        </h1>
      )}
    </div>
  );
};

export default ThreePlayerGuide;
