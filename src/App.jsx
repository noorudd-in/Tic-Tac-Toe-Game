import { useState } from "react";
import "./App.css";
import SelectLevel from "./components/SelectLevel";
import Board from "./components/Board";

function App() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerThree, setPlayerThree] = useState("");
  const [level, setLevel] = useState(null);
  const [winner, setWinner] = useState(null);
  const [aiLevel, setAiLevel] = useState(null);
  const [onlinePlayerID, setOnlinePlayerID] = useState("");
  return (
    <>
      {level == null ? (
        <SelectLevel
          setLevel={setLevel}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          setPlayerThree={setPlayerThree}
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerThree={playerThree}
          setAiLevel={setAiLevel}
          onlinePlayerID={onlinePlayerID}
          setOnlinePlayerID={setOnlinePlayerID}
        />
      ) : (
        <Board
          playerOne={playerOne}
          playerTwo={playerTwo}
          playerThree={playerThree}
          level={level}
          winner={winner}
          setWinner={setWinner}
          aiLevel={aiLevel}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          onlinePlayerID={onlinePlayerID}
        />
      )}
    </>
  );
}

export default App;
