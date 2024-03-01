const useEasyAiLogic = (data, setData) => {
  let newData = data.slice(0, 9);
  let result = newData.reduce(
    (acc, ele, index) => (ele == null ? [...acc, index] : acc),
    []
  );
  let randomIndex = Math.floor(Math.random() * result.length);
  newData[result[randomIndex]] = "O";
  setData(newData);
  return newData;
};

export { useEasyAiLogic };
