import type React from "react"
import Tile from "@/components/tile"

interface GameBoardProps {
  board: number[][]
}

const GameBoard: React.FC<GameBoardProps> = ({ board }) => {
  return (
    <div className="relative bg-[#bbada0] p-2 rounded-md grid grid-cols-4 gap-2 aspect-square mb-4">
      {/* 背景网格单元格 */}
      {Array(16)
        .fill(0)
        .map((_, index) => (
          <div key={`cell-${index}`} className="bg-[#cdc1b4] rounded-md" />
        ))}

      {/* 数字方块 */}
      <div className="absolute inset-2 grid grid-cols-4 gap-2">
        {board.map((row, i) =>
          row.map((value, j) => value !== 0 && <Tile key={`tile-${i}-${j}`} value={value} position={{ x: j, y: i }} />),
        )}
      </div>
    </div>
  )
}

export default GameBoard

