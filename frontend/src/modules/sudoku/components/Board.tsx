import React from 'react';
import SudokuBlock from './Block';
import {createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    board: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme.spacing.sm,
    },
}));

type SudokuBoardProps = {
    board: (number | null)[][];
    onCellChange: (row: number, col: number, value: number | null) => void;
};

const Board: React.FC<SudokuBoardProps> = ({board, onCellChange}) => {
    const {classes} = useStyles();

    const getBlockData = (blockRow: number, blockCol: number) => {
        const startRow = blockRow * 3;
        const startCol = blockCol * 3;
        return Array.from({length: 3}, (_, row) =>
            board[startRow + row].slice(startCol, startCol + 3)
        );
    };

    return (
        <div className={classes.board}>
            {Array.from({length: 3}, (_, blockRow) =>
                Array.from({length: 3}, (_, blockCol) => (
                    <SudokuBlock
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