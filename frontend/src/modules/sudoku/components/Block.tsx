import React from 'react';
import Cell from './Cell';
import {createStyles} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    block: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme.spacing.xs,
    },
}));

type SudokuBlockProps = {
    block: (number | null)[][];
    onCellChange: (row: number, col: number, value: number | null) => void;
};

const Block: React.FC<SudokuBlockProps> = ({block, onCellChange}) => {
    const {classes} = useStyles();

    return (
        <div className={classes.block}>
            {block.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                    <Cell
                        key={`${rowIndex}-${colIndex}`}
                        value={cell}
                        onChange={(value) => onCellChange(rowIndex, colIndex, value)}
                    />
                ))
            )}
        </div>
    );
};

export default Block;