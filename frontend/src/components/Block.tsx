import { Box, SimpleGrid } from "@mantine/core";
import Cell from "@/components/Cell";
import { FC } from "react";
import { BlockData } from "@/domain/Sudoku";


type SudokuBlockProps = {
  blockData: BlockData;
  onChange: (index:number, num:number) => void;
};


export const Block: FC<SudokuBlockProps> = (props:SudokuBlockProps) => {

  return (
    <Box style={
      {
        border: "2px solid #2e8b57",
        padding: "2px",
        borderRadius: "1px",
      }
    }>
    <SimpleGrid cols={3} spacing={1} >
    <Cell cellData={props.blockData[0]} onChange={props.onChange} />
    <Cell cellData={props.blockData[1]} onChange={props.onChange}/>
    <Cell cellData={props.blockData[2]} onChange={props.onChange}/>
    <Cell cellData={props.blockData[3]} onChange={props.onChange}/>
    <Cell cellData={props.blockData[4]} onChange={props.onChange}/>
    <Cell cellData={props.blockData[5]} onChange={props.onChange}/>
    <Cell cellData={props.blockData[6]} onChange={props.onChange}/>
    <Cell cellData={props.blockData[7]} onChange={props.onChange}/>
    <Cell cellData={props.blockData[8]} onChange={props.onChange}/>
  </SimpleGrid>
    </Box>)
}