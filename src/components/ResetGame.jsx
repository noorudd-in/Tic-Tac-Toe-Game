import React from "react";

const ResetGame = ({
  winner,
  setWinner,
  setData,
  currentPlayer,
  setWinnerIndex,
  setUndoData,
  level,
  setCurrentPlayer,
  playerOne,
}) => {
  const handleReset = () => {
    setWinner(null);
    setData([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
    setWinnerIndex([null, null, null]);
    setUndoData(null);
    if (level != "ai") {
      alert(`Now ${currentPlayer} will play first.`);
    }
    if (level == "ai") {
      setCurrentPlayer(playerOne);
    }
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
            Start Again
          </button>
          <button
            className="p-2 m-2 bg-orange-500 text-orange-950 text-2xl rounded-lg"
            onClick={() => window.location.reload()}
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

export default ResetGame;
