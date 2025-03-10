import type React from "react"

interface ScoreBoardProps {
  score: number
  bestScore: number
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, bestScore }) => {
  return (
    <div className="flex gap-2">
      <div className="bg-[#bbada0] rounded-md p-2 text-center min-w-20">
        <div className="text-xs uppercase text-[#eee4da] font-bold">Score</div>
        <div className="text-white font-bold text-xl">{score}</div>
      </div>
      <div className="bg-[#bbada0] rounded-md p-2 text-center min-w-20">
        <div className="text-xs uppercase text-[#eee4da] font-bold">Best</div>
        <div className="text-white font-bold text-xl">{bestScore}</div>
      </div>
    </div>
  )
}

export default ScoreBoard

