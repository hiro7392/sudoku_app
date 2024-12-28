"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Cell_tsx_1 = require("../components/Cell.tsx");
// import {useSudoku} from '../hooks/useSudoku';
// sample Data
var sampleData = [
    [null, null, null, 2, 6, null, 7, null, 1],
    [6, 8, null, null, 7, null, null, 9, null],
    [2, null, null, null, null, null, null, null, null],
    [8, null, null, null, null, null, null, null, 6],
    [4, null, null, 8, null, 6, null, null, 3],
    [7, null, null, null, null, null, null, null, 8],
    [null, null, null, null, null, null, null, null, 5],
    [null, 9, null, null, 4, null, null, 3, 7],
    [null, null, 7, 6, 2, 8, 9, null, null],
];
var SudokuPage = function () {
    //const {board, updateCell, isSolved} = useSudoku();
    console.log('sample', sampleData);
    return (<div>
            <h1>Sudoku Puzzle</h1>
            {/*<Board board={sampleData} onCellChange={() => {*/}
            {/*    console.log('cell changed');*/}
            {/*}}/>*/}
            <Cell_tsx_1.default />
            {/*<p>Congratulations! You solved the puzzle!</p>}*/}
        </div>);
};
exports.default = SudokuPage;
