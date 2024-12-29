import React from "react";
import { Board } from "@/components/Board";
import { AppShell, AppShellHeader, Box, Flex, Group, Title } from "@mantine/core";
import { createInitialData } from "@/domain/Sudoku";
import Image from "next/image";


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

  return (
    <AppShell header={{ height: 60 }} padding="md">
    <AppShellHeader>
      <Group className="h-full px-md">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </Group>
    </AppShellHeader>
    <Flex justify={"flex-start"} direction={"column"} align={"center"} gap={"xl"} mt={"100"}>
      <Title>
        Sudoku Puzzle
      </Title>
      <Box w={"400"} h={"500"}>
        <Board board={ createInitialData(sampleData)}/>
      </Box>
    </Flex>
    </AppShell>
  );
};