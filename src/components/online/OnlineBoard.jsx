import React, { useEffect, useState } from "react";
import Tile from "../Tile";
import { API_URL } from "../../constants";
import axios from "axios";
import clicksound from "../../../assets/click-sound.wav";
import gameoversound from "../../../assets/game-over-sound.wav";
import ResetOnlineGame from "./ResetOnlineGame";
import ShowCurrentPlayerStatus from "./ShowCurrentPlayerStatus";
import KillGame from "./KillGame";

const clickSound = new Audio(clicksound);
const gameOverSound = new Audio(gameoversound);
clickSound.volume = 0.5;
gameOverSound.volume = 0.5;

const OnlineBoard = ({
  setPlayerOne,
  setPlayerTwo,
  playerOne,
  playerTwo,
  onlinePlayerID,
}) => {
  const [winner, setWinner] = useState(null);
  const [winnerIndex, setWinnerIndex] = useState([null, null, null]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [playerScores, setPlayerScores] = useState([0, 0]);
  const [resetScore, setResetScore] = useState(0);
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
  ]);
  const [loading, setLoading] = useState(false);
  let isDirty = true;

  // Constantly update the game state every second.
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios.get(API_URL).then((res) => {
        setPlayerOne(res.data.playerOne);
        setPlayerTwo(res.data.playerTwo);
        setData(res.data.tictactoe);
        setCurrentPlayer(res.data.currentPlayer);
        setResetScore(res.data.resetScore);

        // If any opponent lefts the game, kill the current game.
        if (res.data.playerOne == null) {
          axios
            .patch(API_URL, {
              playerOne: null,
              playerTwo: null,
              currentPlayer: null,
              resetScore: 0,
              tictactoe: [null, null, null, null, null, null, null, null, null],
            })
            .then(() => {
              alert("Game ended as opponent left.");
              window.location.reload();
            });
        }
      });
      console.log("Running SetIntervals");
    }, [1000]);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    checkWinner();
    clickSound.play();
  }, [currentPlayer]);

  useEffect(() => {
    if (winner != null) {
      gameOverSound.play();
    }
  }, [winner]);

  // Kill the game if player doesn't show up within 5 minutes.
  useEffect(() => {
    const timeout = setTimeout(() => {
      axios.get(API_URL).then((res) => {
        console.log(res.data.playerOne, res.data.playerTwo);
        if (res.data.playerOne == null || res.data.playerTwo == null) {
          axios
            .patch(API_URL, {
              playerOne: null,
              playerTwo: null,
              currentPlayer: null,
              resetScore: 0,
              tictactoe: [null, null, null, null, null, null, null, null, null],
            })
            .then(() => {
              alert("Since your friend didn't joined. Game has been resetted.");
              window.location.reload();
            });
        }
      });
    }, [300000]);
    return () => clearTimeout(timeout);
  }, []);

  // If game have been resetted by opponet player run this useEffect.
  useEffect(() => {
    setWinner(null);
    setWinnerIndex([null, null, null]);
    if (resetScore > 0) {
      alert("Game have been restarted! Let's play again");
    }
  }, [resetScore]);

  // When user leaves or refresh the page.
  useEffect(() => {
    const beforeUnload = (e) => {
      axios.patch(API_URL, {
        playerOne: null,
        playerTwo: null,
        currentPlayer: null,
        resetScore: 0,
        tictactoe: [null, null, null, null, null, null, null, null, null],
      });
    };
    window.addEventListener("beforeunload", beforeUnload);

    return () => {
      window.removeEventListener("beforeunload", beforeUnload);
    };
  });

  const handleClick = async (index) => {
    if (winner != null) {
      return;
    }
    if (loading) {
      return;
    }
    let gameState = await axios.get(API_URL);
    let getCurrentPlayer = await gameState.data.currentPlayer;
    let gameData = await gameState.data.tictactoe;
    if (getCurrentPlayer == onlinePlayerID) {
      setLoading(true);
      console.log("You clicked on: ", index);
      if (getCurrentPlayer == playerOne) {
        gameData[index] = "X";
        await axios.patch(API_URL, {
          currentPlayer: playerTwo,
          tictactoe: gameData,
        });
        setLoading(false);
      } else {
        gameData[index] = "O";
        await axios.patch(API_URL, {
          currentPlayer: playerOne,
          tictactoe: gameData,
        });
        setLoading(false);
      }
    } else {
      console.warn("You cannot play now.");
      alert("It's opponent turn. Please wait till opponent plays.");
      setLoading(false);
    }
  };

  const checkWinner = () => {
    for (const { combi } of winnerCOmbinations) {
      const tile1 = data[combi[0]];
      const tile2 = data[combi[1]];
      const tile3 = data[combi[2]];
      if (tile1 == tile2 && tile1 == tile3 && tile1 != null) {
        setWinnerIndex(combi);
        let newScores = [...playerScores];
        if (currentPlayer == playerTwo) {
          setWinner(playerOne);
          newScores[0] += 1;
          setPlayerScores(newScores);
        } else {
          setWinner(playerTwo);
          newScores[1] += 1;
          setPlayerScores(newScores);
        }
        return true;
      }
    }

    let checkData = data.slice(0, 9);
    let flag = checkData.every((ele) => ele != null);
    if (flag) {
      setWinner("draw");
      return true;
    }
    return false;
  };

  const winnerCOmbinations = [
    { combi: [0, 1, 2] },
    { combi: [3, 4, 5] },
    { combi: [6, 7, 8] },
    { combi: [0, 3, 6] },
    { combi: [1, 4, 7] },
    { combi: [2, 5, 8] },
    { combi: [0, 4, 8] },
    { combi: [2, 4, 6] },
  ];

  return (
    <>
      {playerOne != null && playerTwo != null && (
        <ShowCurrentPlayerStatus
          currentPlayer={currentPlayer}
          onlinePlayerID={onlinePlayerID}
        />
      )}
      <div className="m-10 block">
        <h2 className="text-xl">
          {playerOne == null
            ? "Waiting for Player One..."
            : `${playerScores[0]}: ${playerOne}`}
        </h2>
        <h2 className="text-xl mb-2">
          {playerTwo == null
            ? "Waiting for Second Player..."
            : `${playerScores[1]}: ${playerTwo}`}
        </h2>
        <hr />
        <h1>Current Turn: {currentPlayer}</h1>

        {playerTwo == null ? (
          <>
            <h1 className="text-2xl m-10">
              If no one joins within 5 minutes, game will be resetted
              automatically
              <KillGame btnText="Go Back" />
            </h1>
          </>
        ) : (
          <></>
        )}
      </div>

      {playerOne != null && playerTwo != null && (
        <div className="board-2p grid cursor-pointer relative">
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={0}
            handleClick={() => handleClick(0)}
            value={data[0]}
            classname="right-border bottom-border"
          />
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={1}
            handleClick={() => handleClick(1)}
            value={data[1]}
            classname="right-border bottom-border"
          />
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={2}
            handleClick={() => handleClick(2)}
            value={data[2]}
            classname="bottom-border"
          />
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={3}
            handleClick={() => handleClick(3)}
            value={data[3]}
            classname="right-border bottom-border"
          />
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={4}
            handleClick={() => handleClick(4)}
            value={data[4]}
            classname="right-border bottom-border"
          />
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={5}
            handleClick={() => handleClick(5)}
            value={data[5]}
            classname="bottom-border"
          />
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={6}
            handleClick={() => handleClick(6)}
            value={data[6]}
            classname="right-border"
          />
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={7}
            handleClick={() => handleClick(7)}
            value={data[7]}
            classname="right-border"
          />
          <Tile
            winner={winner}
            winnerIndex={winnerIndex}
            index={8}
            handleClick={() => handleClick(8)}
            value={data[8]}
          />
        </div>
      )}

      <ResetOnlineGame
        winner={winner}
        currentPlayer={currentPlayer}
        setWinnerIndex={setWinnerIndex}
        setWinner={setWinner}
        resetScore={resetScore}
      />
    </>
  );
};

export default OnlineBoard;
