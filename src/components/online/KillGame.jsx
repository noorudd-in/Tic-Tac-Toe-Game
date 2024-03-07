import React from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const KillGame = ({ btnText }) => {
  const handleKill = () => {
    if (window.confirm("Are you sure?")) {
      axios
        .patch(API_URL, {
          playerOne: null,
          playerTwo: null,
          currentPlayer: null,
          tictactoe: [null, null, null, null, null, null, null, null, null],
          resetScore: 0,
        })
        .then((res) => {
          alert("Game resetted!");
          window.location.reload();
        });
    }
  };
  return (
    <div>
      <button
        className="p-2 m-2 bg-orange-500 text-orange-950 text-sm rounded-md"
        onClick={handleKill}
      >
        {btnText}
      </button>
    </div>
  );
};

export default KillGame;
