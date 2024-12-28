import React from 'react';
import Block from "../components/Block.tsx";

type SudokuBoardProps = {
    board: (number | null)[][];
    onCellChange: (row: number, col: number, value: number | null) => void;
};

const Board: React.FC<SudokuBoardProps> = ({board, onCellChange}) => {

    const getBlockData = (blockRow: number, blockCol: number) => {
        const startRow = blockRow * 3;
        const startCol = blockCol * 3;
        return Array.from({length: 3}, (_, row) =>
            board[startRow + row].slice(startCol, startCol + 3)
        );
    };

    return (
        <div>
            {Array.from({length: 3}, (_, blockRow) =>
                Array.from({length: 3}, (_, blockCol) => (
                    <Block
                        key={`${blockRow}-${blockCol}`}
                        block={getBlockData(blockRow, blockCol)}
                        onCellChange={(row, col, value) =>
                            onCellChange(blockRow * 3 + row, blockCol * 3 + col, value)
                        }
                    />
                ))
            )}
        </div>
    );
};

export default Board;