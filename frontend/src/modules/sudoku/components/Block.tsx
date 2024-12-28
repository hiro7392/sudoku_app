import React from 'react';
import Cell from './Cell';

type SudokuBlockProps = {
    block: (number | null)[][];
    onCellChange: (row: number, col: number, value: number | null) => void;
};

const Block: React.FC<SudokuBlockProps> = ({block}) => {

    return (
        <div>
            {block.map((row) =>
                row.map((cell, col) => (
                    <Cell
                        key={col}
                        currentCell={cell}
                    />
                ))
            )}
        </div>
    );
};

export default Block;