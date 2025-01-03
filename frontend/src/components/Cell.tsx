'use client';
import { FC } from "react";
import { CellData } from "@/domain/Sudoku";
import { Box, Input } from "@mantine/core";

type CellProps = {
  cellData: CellData;
  onChange: (index:number, num:number) => void;
};

const Cell: FC<CellProps> = ({ cellData }) => {


  const numStr = cellData.value ? cellData.value.toString() : "・";
  return (
    <Box
      style={{
        border: "1px dotted #000", // 点線のボーダーを指定
        padding: "2px", // 内側にスペースを確保
        borderRadius: "1px", // ボーダーを角丸にする（任意）
      }}
    >
      <Input
        placeholder={numStr}
        value = {numStr}
        disabled={cellData.isLocked} // ロックされている場合は入力不可にする
        style={{
          border: "none", // Input のボーダーを削除
          textAlign: "center", // テキストを中央に揃える
        }}
        readOnly // 入力禁止にする（任意）
      />
    </Box>
  );
};

export default Cell;