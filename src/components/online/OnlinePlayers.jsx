import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import KillGame from "./KillGame";

const OnlinePlayers = ({
  setPlayerOne,
  setPlayerTwo,
  setLevel,
  toggleButton,
  onlinePlayerID,
  setOnlinePlayerID,
}) => {
  const [loading, setLoading] = useState(false);
  const [killGame, setKillGame] = useState(false);
  useEffect(() => {
    axios.get(API_URL).then((res) => {
      setPlayerOne(res.data.playerOne);
      setPlayerTwo(res.data.playerTwo);
    });
  }, [onlinePlayerID]);

  const handleStartGame = async () => {
    if (onlinePlayerID == null || onlinePlayerID == "") {
      alert("Name cannot be empty");
      return;
    }
    setLoading(true);
    let gameState = await axios.get(API_URL);
    let checkPlayerOne = await gameState.data.playerOne;
    let checkPlayerTwo = await gameState.data.playerTwo;
    if (checkPlayerOne == null) {
      axios
        .patch(API_URL, {
          playerOne: onlinePlayerID,
          currentPlayer: onlinePlayerID,
        })
        .then((res) => console.log(res));
      setPlayerOne(onlinePlayerID);
      setLevel(toggleButton);
      setLoading(false);
    } else if (checkPlayerTwo == null) {
      if (
        onlinePlayerID.toLowerCase() == checkPlayerOne.toLowerCase() &&
        onlinePlayerID != null
      ) {
        setLoading(false);
        alert(
          "Two players cannot have same name. Please choose a different name."
        );
        return;
      } else {
        axios
          .patch(API_URL, {
            playerTwo: onlinePlayerID,
          })
          .then((res) => console.log(res));
      }
      setPlayerTwo(onlinePlayerID);
      setLevel(toggleButton);
      setLoading(false);
    } else {
      setLoading(false);
      setKillGame(true);
      alert("A game is already in progress. Please wait while it is finished.");
      return;
    }
  };
  return (
    <>
      <div className="grid place-items-center">
        {loading ? (
          <h1>Loading Game. Please Wait...</h1>
        ) : (
          <>
            <input
              placeholder="Enter your name."
              className="text-black p-1 m-2 rounded-md"
              onChange={(e) => setOnlinePlayerID(e.target.value)}
            />

            <button
              className="p-2 m-2 bg-orange-500 text-orange-950 text-sm rounded-md"
              onClick={() => handleStartGame()}
            >
              Start Game
            </button>

            {killGame && (
              <>
                <h1>OR</h1>
                <KillGame btnText="Kill Game" />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default OnlinePlayers;
