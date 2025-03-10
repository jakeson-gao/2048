import type React from "react"

const Instructions: React.FC = () => {
  return (
    <div className="mt-4 text-[#776e65]">
      <h2 className="font-bold mb-1">HOW TO PLAY:</h2>
      <p>
        Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they{" "}
        <strong>merge into one!</strong>
      </p>
    </div>
  )
}

export default Instructions

