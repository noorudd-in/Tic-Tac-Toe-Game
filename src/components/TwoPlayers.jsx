import React, { useState } from "react";
import "../App.css";
import Tile from "./Tile";

const TwoPlayers = ({
  winnerIndex,
  data,
  handleClick,
  playerOne,
  playerTwo,
  currentPlayer,
  winner,
  scores,
}) => {
  return (
    <>
      <div className="m-10 block">
        <h2 className="text-xl">
          {scores[0]}: {playerOne}
        </h2>
        <h2 className="text-xl mb-2">
          {scores[1]}: {playerTwo}
        </h2>
        <hr />
        <h1>Current Turn: {currentPlayer}</h1>
      </div>
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
    </>
  );
};

export default TwoPlayers;
