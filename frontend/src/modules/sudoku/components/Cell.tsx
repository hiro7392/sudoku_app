/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';

const Cell: React.FC = () => {
    const cellStyle = css`
        width: 40px;
        height: 40px;
        text-align: center;
        border: 1px solid #ccc;
        font-size: 16px;

        &:focus {
            border-color: #909090;
        }
    `;

    return <input type="text" css={cellStyle}/>;
};

export default Cell;