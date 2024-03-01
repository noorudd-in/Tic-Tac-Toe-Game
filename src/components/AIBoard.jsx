import React from "react";
import Tile from "./Tile";

const AIBoard = ({
  playerOne,
  data,
  winner,
  handleClick,
  winnerIndex,
  scores,
  aiLevel,
}) => {
  return (
    <>
      <div className="m-10">
        <h1 className="text-2xl">
          Level: {aiLevel.charAt(0).toUpperCase() + aiLevel.slice(1)}
        </h1>
        <h2>
          {scores[0]}: {playerOne}
        </h2>
        <h2>{scores[1]}: Computer</h2>
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

export default AIBoard;
