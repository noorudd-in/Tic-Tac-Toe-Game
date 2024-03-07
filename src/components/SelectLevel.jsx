import React, { useState } from "react";
import "../App.css";
import GetNames from "./GetNames";
import GetNameForAI from "./computer/GetNameForAI";
import OnlinePlayers from "./online/OnlinePlayers";

const SelectLevel = ({
  setLevel,
  setPlayerOne,
  setPlayerTwo,
  setPlayerThree,
  playerOne,
  playerTwo,
  playerThree,
  setAiLevel,
  onlinePlayerID,
  setOnlinePlayerID,
}) => {
  const [toggleButton, setToggleButton] = useState(null);

  return (
    <>
      <div className="mt-[300px]">
        {toggleButton == null && (
          <>
            <div className="mt-[300px]">
              <h1 className="text-3xl">Tic Tac Toe</h1>
              <h1 className="text-lg mb-2">Choose your level!</h1>
              <div className="flex justify-center items-center">
                <button
                  className="p-2 m-2 bg-orange-500 text-orange-950 text-2xl rounded-lg"
                  onClick={() => {
                    setToggleButton("2p");
                  }}
                >
                  2 Players
                </button>

                <button
                  className="p-2 m-2 bg-orange-500 text-orange-950 text-2xl rounded-lg"
                  onClick={() => setToggleButton("3p")}
                >
                  3 Players
                </button>
              </div>
              <h1>OR</h1>
              <div className="flex justify-center items-center">
                <button
                  className="p-2 m-2 bg-orange-500 text-orange-950 text-2xl rounded-lg"
                  onClick={() => setToggleButton("ai")}
                >
                  Play with Computer
                </button>
              </div>
              <h1>OR</h1>
              <div className="flex justify-center items-center">
                <button
                  className="p-2 m-2 bg-orange-500 text-orange-950 text-2xl rounded-lg"
                  onClick={() => setToggleButton("online")}
                >
                  Play Online
                </button>
              </div>
              <h1 className="text-lg mt-2">
                Made by{" "}
                <a
                  href="https://linkedin.com/in/nooruddin-shaikh"
                  target="_blank"
                  className="underline underline-offset-4 text-sky-400"
                >
                  Nooruddin Shaikh
                </a>
                .
              </h1>
            </div>
          </>
        )}
      </div>

      {(toggleButton == "2p" || toggleButton == "3p") && (
        <GetNames
          toggleButton={toggleButton}
          setLevel={setLevel}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          setPlayerThree={setPlayerThree}
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerThree={playerThree}
        />
      )}

      {toggleButton == "ai" && (
        <GetNameForAI
          playerOne={playerOne}
          setPlayerOne={setPlayerOne}
          setLevel={setLevel}
          setAiLevel={setAiLevel}
        />
      )}

      {toggleButton == "online" && (
        <OnlinePlayers
          toggleButton={toggleButton}
          setLevel={setLevel}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          playerOne={playerOne}
          playerTwo={playerTwo}
          onlinePlayerID={onlinePlayerID}
          setOnlinePlayerID={setOnlinePlayerID}
        />
      )}
    </>
  );
};

export default SelectLevel;
