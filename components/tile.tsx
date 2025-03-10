import type React from "react"

interface TileProps {
  value: number
  position: {
    x: number
    y: number
  }
}

const Tile: React.FC<TileProps> = ({ value, position }) => {
  // 根据值定义方块颜色
  const getBgColor = () => {
    const colors: Record<number, string> = {
      2: "bg-[#eee4da]",
      4: "bg-[#ede0c8]",
      8: "bg-[#f2b179]",
      16: "bg-[#f59563]",
      32: "bg-[#f67c5f]",
      64: "bg-[#f65e3b]",
      128: "bg-[#edcf72]",
      256: "bg-[#edcc61]",
      512: "bg-[#edc850]",
      1024: "bg-[#edc53f]",
      2048: "bg-[#edc22e]",
    }

    return colors[value] || "bg-[#3c3a32]"
  }

  // 根据值定义文字颜色
  const getTextColor = () => {
    return value <= 4 ? "text-[#776e65]" : "text-white"
  }

  // 根据数字长度调整字体大小
  const getFontSize = () => {
    if (value < 100) return "text-3xl"
    if (value < 1000) return "text-2xl"
    return "text-xl"
  }

  return (
    <div
      className={`flex items-center justify-center rounded-md w-full h-full ${getBgColor()} ${getTextColor()} font-bold ${getFontSize()}`}
      style={{
        gridColumn: position.x + 1,
        gridRow: position.y + 1,
      }}
    >
      {value}
    </div>
  )
}

export default Tile

