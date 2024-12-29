import { Box, SimpleGrid } from "@mantine/core";
import Cell from "@/components/Cell";
import { FC } from "react";
import { BlockData, checkBlock } from "@/domain/Sudoku";


type SudokuBlockProps = {
  blockData: BlockData;
};


export const Block: FC<SudokuBlockProps> = (props:SudokuBlockProps) => {

  return (
    <Box style={
      {
        border: "2px solid #2e8b57", // 点線のボーダーを指定
        padding: "2px", // 内側にスペースを確保
        borderRadius: "1px", // ボーダーを角丸にする（任意）
      }
    }>
    <SimpleGrid cols={3} spacing={1} >
    <Cell cellData={props.blockData[0]} />
    <Cell cellData={props.blockData[1]} />
    <Cell cellData={props.blockData[2]} />
    <Cell cellData={props.blockData[3]} />
    <Cell cellData={props.blockData[4]} />
    <Cell cellData={props.blockData[5]} />
    <Cell cellData={props.blockData[6]} />
    <Cell cellData={props.blockData[7]} />
    <Cell cellData={props.blockData[8]} />
  </SimpleGrid>
    </Box>)
}