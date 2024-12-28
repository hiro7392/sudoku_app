"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Block_1 = require("./Block");
var core_1 = require("@mantine/core");
var useStyles = (0, core_1.createStyles)(function (theme) {
    return ({
        board: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: theme.spacing.sm,
        },
    });
});
var Board = function (_a) {
    var board = _a.board, onCellChange = _a.onCellChange;
    var classes = useStyles().classes;
    var getBlockData = function (blockRow, blockCol) {
        var startRow = blockRow * 3;
        var startCol = blockCol * 3;
        return Array.from({ length: 3 }, function (_, row) {
            return board[startRow + row].slice(startCol, startCol + 3);
        });
    };
    return (<div className={classes.board}>
            {Array.from({ length: 3 }, function (_, blockRow) {
            return Array.from({ length: 3 }, function (_, blockCol) { return (<Block_1.default key={"".concat(blockRow, "-").concat(blockCol)} block={getBlockData(blockRow, blockCol)} onCellChange={function (row, col, value) {
                    return onCellChange(blockRow * 3 + row, blockCol * 3 + col, value);
                }}/>); });
        })}
        </div>);
};
exports.default = Board;
