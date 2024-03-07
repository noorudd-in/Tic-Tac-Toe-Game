import React from "react";
import axios from "axios";
import { API_URL } from "../../constants";

const ResetOnlineGame = ({
  winner,
  currentPlayer,
  setWinner,
  setWinnerIndex,
  resetScore,
}) => {
  const handleReset = () => {
    axios
      .patch(API_URL, {
        resetScore: resetScore + 1,
        tictactoe: [null, null, null, null, null, null, null, null, null],
      })
      .then(() => {
        setWinner(null);
        setWinnerIndex([null, null, null]);
        alert(`Now ${currentPlayer} will play first.`);
      });
  };

  const handleRestart = () => {
    axios
      .patch(API_URL, {
        playerOne: null,
        playerTwo: null,
        currentPlayer: null,
        resetScore: 0,
        tictactoe: [null, null, null, null, null, null, null, null, null],
      })
      .then(() => {
        window.location.reload();
      });
  };
  return (
    <>
      {winner != null && (
        <div className="grid items-center mt-3">
          <h1 className="text-2xl m-3 border-dotted border-t-2 border-b-2 border-orange-400 py-2">
            {winner == "draw" ? "Draw" : `${winner} Wins!`}
          </h1>
          <button
            className="p-2 m-2 bg-orange-500 text-orange-950 text-2xl rounded-lg"
            onClick={() => handleReset()}
          >
            Play Again
          </button>
          <button
            className="p-2 m-2 bg-orange-500 text-orange-950 text-2xl rounded-lg"
            onClick={() => handleRestart()}
          >
            Change Level
          </button>
          <footer className="mt-2 mb-10">
            <h1>
              <a
                href="https://linkedin.com/in/nooruddin-shaikh"
                target="_blank"
                className="underline underline-offset-4 text-sky-400"
              >
                Nooruddin Shaikh
              </a>{" "}
              |{" "}
              <a
                href="https://github.com/noorudd-in/Tic-Tac-Toe-Game"
                target="_blank"
                className="underline underline-offset-4 text-sky-400"
              >
                Source Code
              </a>
            </h1>
          </footer>
        </div>
      )}
    </>
  );
};

export default ResetOnlineGame;
