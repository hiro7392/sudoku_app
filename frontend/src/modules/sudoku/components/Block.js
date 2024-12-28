"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var core_1 = require("@mantine/core");
var Cell_1 = require("@components/Cell");
var useStyles = (0, core_1.createStyles)(function (theme) { return ({
    block: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme.spacing.xs,
    },
}); });
var Block = function (_a) {
    var block = _a.block, onCellChange = _a.onCellChange;
    var classes = useStyles().classes;
    return (<div className={classes.block}>
            {block.map(function (row, rowIndex) {
            return row.map(function (cell, colIndex) { return (<Cell_1.default key={"".concat(rowIndex, "-").concat(colIndex)} value={cell} onChange={function (value) { return onCellChange(rowIndex, colIndex, value); }}/>); });
        })}
        </div>);
};
exports.default = Block;
