import React from 'react';
import Block from "../components/Block.tsx";
// import {useSudoku} from '../hooks/useSudoku';

// sample Data
const sampleData: (number | null)[][] = [
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


export const SudokuPage: React.FC = () => {
    //const {board, updateCell, isSolved} = useSudoku();
    console.log('sample', sampleData);

    return (
        <div>
            <h1>Sudoku Puzzle</h1>
            {/*<Board board={sampleData} onCellChange={() => {*/}
            {/*    console.log('cell changed');*/}
            {/*}}/>*/}
            <Block block={sampleData} onCellChange={() => {
            }}/>
            {/*<p>Congratulations! You solved the puzzle!</p>}*/}
        </div>
    );
};