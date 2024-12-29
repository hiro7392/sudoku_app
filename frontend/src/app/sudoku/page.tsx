import { Block } from "@/components/Block";
import React from "react";
import { Board } from "@/components/Board";
import { Box, Flex, Title } from "@mantine/core";
import { createInitialData } from "@/domain/Sudoku";


const sampleData: (number | null) [][] = [
  [null, null, null, 2, 6, null, 7, null, 1],
  [6, 8, null, null, 7, null, null, 9, null],
  [2, null, null, null, null, null, null, null, null],
  [8, null, null, null, null, null, null, null, 6],
  [4, null, null, 8, null, 6, null, null, 3],
  [7, null, null, null, null, null, null, null, 8],
  [null, null, null, null, null, null, null, null, 5],
  [null, 9, null, null, 4, null, null, 3, 7],
  [null, null, 7, 6, 2, 8, 9, null, null],
]

export default function Page() {
  //const {board, updateCell, isSolved} = useSudoku();
  console.log('sample', sampleData);

  return (
    <Flex justify={"flex-start"} direction={"column"} align={"center"} gap={"xl"}>
      <Title>
        Sudoku Puzzle
      </Title>
      <Box w={"400"} h={"500"}>
        <Board board={ createInitialData(sampleData)}/>
      </Box>
    </Flex>
  );
};