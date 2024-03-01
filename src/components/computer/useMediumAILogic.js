const twosCombo = [
  [0, 1, 2],
  [0, 2, 1],
  [0, 3, 6],
  [0, 6, 3],
  [0, 4, 8],
  [0, 8, 4],
  [1, 2, 0],
  [1, 4, 7],
  [1, 7, 4],
  [2, 5, 8],
  [2, 8, 5],
  [2, 4, 6],
  [2, 6, 4],
  [3, 6, 0],
  [3, 4, 5],
  [3, 5, 4],
  [4, 6, 2],
  [4, 7, 1],
  [4, 8, 0],
  [4, 5, 3],
  [5, 8, 2],
  [6, 7, 8],
  [6, 8, 7],
  [7, 8, 6],
];
const onesCombos = [
  [0, 4],
  [1, 0],
  [2, 4],
  [3, 0],
  [4, 8],
  [5, 3],
  [6, 2],
  [7, 1],
  [8, 6],
];

function getMove(boardData) {
  let move;
  for (const combo of twosCombo) {
    let tile1 = boardData[combo[0]];
    let tile2 = boardData[combo[1]];
    let tile3 = boardData[combo[2]];
    if (tile1 == tile2 && tile1 != null && tile3 == null) {
      move = combo[2];
      break;
    }
  }

  if (move == undefined) {
    for (let combo of onesCombos) {
      let tile1 = boardData[combo[0]];
      let tile2 = boardData[combo[1]];
      if (tile1 == "X" && tile2 == null) {
        move = combo[1];
        break;
      }
    }
  }

  if (move == undefined) {
    let result = boardData.reduce(
      (acc, ele, index) => (ele == null ? [...acc, index] : acc),
      []
    );
    move = Math.floor(Math.random() * result.length);
  }
  return move;
}

const useMediumAILogic = (data, setData) => {
  let newData = data.slice(0, 9);
  let move = getMove(newData);
  newData[move] = "O";
  setData(newData);
  return move;
};

export { useMediumAILogic };
