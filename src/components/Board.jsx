import React, { useState, useEffect } from "react";
import TwoPlayers from "./TwoPlayers";
import ThreePlayers from "./ThreePlayers";
import ResetGame from "./ResetGame";
import clicksound from "../../assets/click-sound.wav";
import gameoversound from "../../assets/game-over-sound.wav";

const clickSound = new Audio(clicksound);
const gameOverSound = new Audio(gameoversound);
clickSound.volume = 0.5;
gameOverSound.volume = 0.5;

const Board = ({
  playerOne,
  playerTwo,
  playerThree,
  level,
  winner,
  setWinner,
}) => {
  const [data, setData] = useState([
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
  const [currentPlayer, setCurrentPlayer] = useState(playerOne);
  const [winnerIndex, setWinnerIndex] = useState([null, null, null]);
  const [scores, setScores] = useState([0, 0, 0]);
  const [undoData, setUndoData] = useState(null);

  useEffect(() => {
    checkWinner();
    clickSound.play();
  }, [currentPlayer]);

  useEffect(() => {
    if (winner != null) {
      gameOverSound.play();
    }
  }, [winner]);

  const handleClick = (index) => {
    if (winner != null) {
      return;
    }
    if (data[index] != null) {
      return;
    }
    let newData = [...data];
    let oldData = [...data];
    setUndoData(oldData);
    if (level == "2p") {
      if (currentPlayer == playerOne) {
        newData[index] = "X";
        setData(newData);
        setCurrentPlayer(playerTwo);
      } else {
        newData[index] = "O";
        setData(newData);
        setCurrentPlayer(playerOne);
      }
    } else {
      if (currentPlayer == playerOne) {
        newData[index] = "1";
        setData(newData);
        setCurrentPlayer(playerTwo);
      } else if (currentPlayer == playerTwo) {
        newData[index] = "2";
        setData(newData);
        setCurrentPlayer(playerThree);
      } else {
        newData[index] = "3";
        setData(newData);
        setCurrentPlayer(playerOne);
      }
    }
  };

  const handleUndo = () => {
    setData(undoData);
    setUndoData(null);
    if (level == "2p") {
      if (currentPlayer == playerOne) {
        setCurrentPlayer(playerTwo);
      } else {
        setCurrentPlayer(playerOne);
      }
    } else {
      if (currentPlayer == playerOne) {
        setCurrentPlayer(playerThree);
      } else if (currentPlayer == playerTwo) {
        setCurrentPlayer(playerOne);
      } else {
        setCurrentPlayer(playerTwo);
      }
    }
  };

  const winnerCOmbinations = [
    // Left Upper Grid Combination
    { combi: [0, 1, 2] },
    { combi: [3, 4, 5] },
    { combi: [6, 7, 8] },
    { combi: [0, 3, 6] },
    { combi: [1, 4, 7] },
    { combi: [2, 5, 8] },
    { combi: [0, 4, 8] },
    { combi: [2, 4, 6] },
    // Right Upper Grid Combination
    { combi: [1, 2, 9] },
    { combi: [4, 5, 10] },
    { combi: [7, 8, 11] },
    { combi: [9, 10, 11] },
    { combi: [1, 5, 11] },
    { combi: [9, 5, 7] },
    // Left Lower Gird Combination
    { combi: [12, 13, 14] },
    { combi: [3, 6, 12] },
    { combi: [4, 7, 13] },
    { combi: [5, 8, 14] },
    { combi: [3, 7, 14] },
    { combi: [5, 7, 12] },
    // Right Lower Grid Combination
    { combi: [4, 5, 10] },
    { combi: [7, 8, 11] },
    { combi: [13, 14, 15] },
    { combi: [10, 11, 15] },
    { combi: [4, 8, 15] },
    { combi: [10, 8, 13] },
  ];

  const checkWinner = () => {
    for (const { combi } of winnerCOmbinations) {
      const tile1 = data[combi[0]];
      const tile2 = data[combi[1]];
      const tile3 = data[combi[2]];
      if (tile1 == tile2 && tile1 == tile3 && tile1 != null) {
        setUndoData(null);
        setWinnerIndex(combi);
        let newScores = [...scores];
        if (level == "2p") {
          if (currentPlayer == playerTwo) {
            setWinner(playerOne);
            newScores[0] += 1;
            setScores(newScores);
          } else {
            setWinner(playerTwo);
            newScores[1] += 1;
            setScores(newScores);
          }
        } else {
          if (currentPlayer == playerOne) {
            setWinner(playerThree);
            newScores[2] += 1;
            setScores(newScores);
          } else if (currentPlayer == playerTwo) {
            setWinner(playerOne);
            newScores[0] += 1;
            setScores(newScores);
          } else {
            setWinner(playerTwo);
            newScores[1] += 1;
            setScores(newScores);
          }
        }
        return;
      }
    }

    // Draw
    if (level == "2p") {
      let checkData = data.slice(0, 9);
      let flag = checkData.every((ele) => ele != null);
      if (flag) {
        setWinner("draw");
      }
    } else {
      let flag = data.every((ele) => ele != null);
      if (flag) {
        setWinner("draw");
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {level == "2p" && (
        <TwoPlayers
          playerOne={playerOne}
          playerTwo={playerTwo}
          currentPlayer={currentPlayer}
          winnerIndex={winnerIndex}
          data={data}
          handleClick={handleClick}
          winner={winner}
          scores={scores}
        />
      )}
      {level == "3p" && (
        <ThreePlayers
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerThree={playerThree}
          currentPlayer={currentPlayer}
          winnerIndex={winnerIndex}
          data={data}
          handleClick={handleClick}
          winner={winner}
          scores={scores}
        />
      )}
      {undoData != null && winner != "draw" && (
        <button
          className="p-2 m-2 bg-orange-500 text-orange-950 text-2xl rounded-lg"
          onClick={handleUndo}
        >
          Undo Once
        </button>
      )}
      <ResetGame
        winner={winner}
        setWinner={setWinner}
        setData={setData}
        currentPlayer={currentPlayer}
        setWinnerIndex={setWinnerIndex}
        setUndoData={setUndoData}
      />
    </div>
  );
};

export default Board;
