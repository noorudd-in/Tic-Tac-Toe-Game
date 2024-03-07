import React from "react";

const ShowCurrentPlayerStatus = ({ currentPlayer, onlinePlayerID }) => {
  return (
    <div
      className={`${
        currentPlayer == onlinePlayerID ? "bg-green-600 p-2" : "bg-red-500 p-2"
      } m-3 rounded-b-lg`}
      style={{ maxWidth: "99%" }}
    >
      {currentPlayer == onlinePlayerID
        ? "It's your turn. Play!"
        : "Waiting for opponent move."}
    </div>
  );
};

export default ShowCurrentPlayerStatus;
