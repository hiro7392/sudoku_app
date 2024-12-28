/** @jsxImportSource @emotion/react */
import {FC} from "react";

type CellProps = {
    currentCell: number | null;
}

const Cell: FC<CellProps> = ({currentCell}) => {
    const numStr = currentCell ? currentCell.toString() : '';
    return <div>{numStr}</div>
};

export default Cell;