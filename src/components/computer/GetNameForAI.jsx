import React from "react";

const GetNameForAI = ({ setPlayerOne, playerOne, setLevel, setAiLevel }) => {
  const handleSubmit = (level) => {
    if (playerOne.toLowerCase() == "computer") {
      alert("Wait! You are human. Choose another name.");
    } else if (playerOne == "") {
      alert("Name cannot be empty");
    } else {
      setLevel("ai");
      setAiLevel(level);
    }
  };
  return (
    <div className="grid place-items-center">
      <input
        placeholder="Enter your name"
        className="text-black p-1 m-2 rounded-md"
        onChange={(e) => setPlayerOne(e.target.value)}
      />

      <button
        className="p-2 m-2 bg-orange-500 text-orange-950 text-sm rounded-md"
        onClick={() => handleSubmit("easy")}
      >
        Start Game (Easy)
      </button>
      <button
        className="p-2 m-2 bg-orange-500 text-orange-950 text-sm rounded-md"
        onClick={() => handleSubmit("medium")}
      >
        Start Game (Medium)
      </button>
      <button
        className="p-2 m-2 bg-orange-500 text-orange-950 text-sm rounded-md"
        onClick={() => handleSubmit("hard")}
      >
        Start Game (Hard)
      </button>
    </div>
  );
};

export default GetNameForAI;
