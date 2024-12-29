import { FC } from "react";
import { Block } from "@/components/Block";
import { SimpleGrid } from "@mantine/core";
import { BoardData } from "@/domain/Sudoku";

type BoardProps = {
  board: BoardData;
}

export const Board:FC<BoardProps> = (props:BoardProps) => {

return <SimpleGrid cols={3} spacing={1} >
  <Block blockData={props.board[0]} />
  <Block blockData={props.board[1]} />
  <Block blockData={props.board[2]} />
  <Block blockData={props.board[3]} />
  <Block blockData={props.board[4]} />
  <Block blockData={props.board[5]} />
  <Block blockData={props.board[6]} />
  <Block blockData={props.board[7]} />
  <Block blockData={props.board[8]} />
</SimpleGrid>
}