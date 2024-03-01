import React from "react";
import Tile from "./Tile";
import ThreePlayerGuide from "./ThreePlayerGuide";
import "../App.css";

const ThreePlayers = ({
  winnerIndex,
  data,
  handleClick,
  playerOne,
  playerTwo,
  playerThree,
  currentPlayer,
  winner,
  scores,
}) => {
  return (
    <>
      <div className="m-5">
        <ThreePlayerGuide />
        <h2 className="text-xl">
          {playerOne} : {scores[0]}
        </h2>
        <h2 className="text-xl">
          {playerTwo} : {scores[1]}
        </h2>
        <h2 className="text-xl mb-2">
          {playerThree}: {scores[2]}
        </h2>
        <hr />
        <h1>Current Turn: {currentPlayer}</h1>
      </div>

      <div className="grid board-3p relative">
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
          classname="right-border bottom-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={9}
          handleClick={() => handleClick(9)}
          value={data[9]}
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
          classname="right-border bottom-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={10}
          handleClick={() => handleClick(10)}
          value={data[10]}
          classname="bottom-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={6}
          handleClick={() => handleClick(6)}
          value={data[6]}
          classname="right-border bottom-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={7}
          handleClick={() => handleClick(7)}
          value={data[7]}
          classname="right-border bottom-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={8}
          handleClick={() => handleClick(8)}
          value={data[8]}
          classname="right-border bottom-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={11}
          handleClick={() => handleClick(11)}
          value={data[11]}
          classname="bottom-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={12}
          handleClick={() => handleClick(12)}
          value={data[12]}
          classname="right-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={13}
          handleClick={() => handleClick(13)}
          value={data[13]}
          classname="right-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={14}
          handleClick={() => handleClick(14)}
          value={data[14]}
          classname="right-border"
        />
        <Tile
          winner={winner}
          winnerIndex={winnerIndex}
          index={15}
          handleClick={() => handleClick(15)}
          value={data[15]}
        />
      </div>
    </>
  );
};

export default ThreePlayers;
