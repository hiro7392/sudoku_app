export type BlockData = [
  CellData,
  CellData,
  CellData,
  CellData,
  CellData,
  CellData,
  CellData,
  CellData,
  CellData
];
export type BoardData = [
  BlockData,
  BlockData,
  BlockData,
  BlockData,
  BlockData,
  BlockData,
  BlockData,
  BlockData,
  BlockData
]
export type CellData = {
  value:number | null,
  isLocked:boolean,
}


export const createInitialData=(data:  (number | null) [9][9]):BoardData=> {
  const boardData = [];
  for (let i = 0; i < 9; i++) {
    const  blockData=[];
    for (let j = 0; j < 9; j++) {
      if(data[i][j]===null) {
        const cellData: CellData = { value: null, isLocked: false };
        blockData.push(cellData);
      }else{
        const cellData: CellData = { value: data[i][j], isLocked: true };
        blockData.push(cellData);
      }
    }
    boardData.push(blockData as BlockData);
  }
  return boardData as BoardData;
}