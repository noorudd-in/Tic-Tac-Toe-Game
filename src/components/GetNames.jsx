import React from "react";

const GetNames = ({
  toggleButton,
  setLevel,
  setPlayerOne,
  setPlayerTwo,
  setPlayerThree,
  playerOne,
  playerTwo,
  playerThree,
}) => {
  const handleStartGame = () => {
    if (toggleButton == "2p") {
      if (playerOne != "" && playerTwo != "") {
        if (playerOne == playerTwo) {
          alert("Two players cannot have same name");
          return;
        }
        setLevel(toggleButton);
      } else {
        alert("Enter All Players Details");
      }
    } else {
      if (playerOne != "" && playerTwo != "" && playerThree != "") {
        if (playerOne == playerTwo || playerTwo == playerThree) {
          alert("Two players cannot have same name");
          return;
        }
        setLevel(toggleButton);
      } else {
        alert("Enter All Players Details");
      }
    }
  };
  return (
    <>
      <div className="grid place-items-center">
        <input
          placeholder="Player 1 Name"
          className="text-black p-1 m-2 rounded-md"
          onChange={(e) => setPlayerOne(e.target.value)}
        />

        <input
          placeholder="Player 2 Name"
          className="text-black p-1 m-2 rounded-md"
          onChange={(e) => setPlayerTwo(e.target.value)}
        />
        {toggleButton == "3p" && (
          <>
            <input
              placeholder="Player 3 Name"
              className="text-black p-1 m-2 rounded-md"
              onChange={(e) => setPlayerThree(e.target.value)}
            />
          </>
        )}

        <button
          className="p-2 m-2 bg-orange-500 text-orange-950 text-sm rounded-md"
          onClick={() => handleStartGame()}
        >
          Start Game
        </button>

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
  );
};

export default GetNames;
