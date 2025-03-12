'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Leaderboard, { LeaderboardRef } from './Leaderboard';

type Cell = number | null;
type Board = Cell[][];

export default function Game2048() {
  const [board, setBoard] = useState<Board>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const leaderboardRef = useRef<LeaderboardRef>(null);

  // Initialize board
  const initBoard = useCallback(() => {
    const newBoard: Board = Array(4).fill(null).map(() => Array(4).fill(null));
    addNewTile(newBoard);
    addNewTile(newBoard);
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
    setShowNameInput(false);
  }, []);

  // Add new tile to the board
  const addNewTile = (currentBoard: Board) => {
    const emptyCells: [number, number][] = [];
    currentBoard.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === null) {
          emptyCells.push([i, j]);
        }
      });
    });

    if (emptyCells.length > 0) {
      const [i, j] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      currentBoard[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
  };

  // Submit score to leaderboard
  const submitScore = async (name: string) => {
    try {
      await fetch('/api/leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, score }),
      });
      setShowNameInput(false);
      // Refresh leaderboard after submitting score
      await leaderboardRef.current?.fetchLeaderboard();
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  // Handle name submission
  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      submitScore(playerName.trim());
    }
  };

  // Handle game over
  const handleGameOver = useCallback(() => {
    setGameOver(true);
    // Show name input dialog after 1.5 seconds
    setTimeout(() => {
      setShowNameInput(true);
    }, 1500);
  }, []);

  // Move tiles
  const moveTiles = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (gameOver) return;

    const newBoard = board.map(row => [...row]);
    let moved = false;
    let newScore = score;

    const rotate = (board: Board): Board => {
      const N = board.length;
      const rotated = Array(N).fill(null).map(() => Array(N).fill(null));
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          rotated[j][N - 1 - i] = board[i][j];
        }
      }
      return rotated;
    };

    const moveLeft = (board: Board): boolean => {
      let moved = false;
      for (let i = 0; i < 4; i++) {
        let position = 0;
        for (let j = 1; j < 4; j++) {
          if (board[i][j] !== null) {
            if (board[i][position] === null) {
              board[i][position] = board[i][j];
              board[i][j] = null;
              moved = true;
            } else if (board[i][position] !== null && board[i][position] === board[i][j]) {
              const currentValue = board[i][position] as number;
              board[i][position] = currentValue * 2;
              newScore += currentValue * 2;
              board[i][j] = null;
              position++;
              moved = true;
            } else {
              position++;
              if (position !== j) {
                board[i][position] = board[i][j];
                board[i][j] = null;
                moved = true;
              }
            }
          }
        }
      }
      return moved;
    };

    // Rotate board according to direction and move left
    let rotations = 0;
    if (direction === 'up') rotations = 1;
    else if (direction === 'right') rotations = 2;
    else if (direction === 'down') rotations = 3;

    let currentBoard = newBoard;
    for (let i = 0; i < rotations; i++) {
      currentBoard = rotate(currentBoard);
    }

    moved = moveLeft(currentBoard);

    // Rotate back
    for (let i = 0; i < (4 - rotations) % 4; i++) {
      currentBoard = rotate(currentBoard);
    }

    if (moved) {
      addNewTile(currentBoard);
      setBoard(currentBoard);
      setScore(newScore);

      // Check for game over
      if (!canMove(currentBoard)) {
        handleGameOver();
      }
    }
  };

  // Check if any moves are possible
  const canMove = (board: Board): boolean => {
    // Check for empty cells
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] === null) return true;
      }
    }

    // Check for possible merges
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const current = board[i][j];
        if (
          (i < 3 && board[i + 1][j] === current) ||
          (j < 3 && board[i][j + 1] === current)
        ) {
          return true;
        }
      }
    }

    return false;
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          moveTiles('up');
          break;
        case 'ArrowDown':
          moveTiles('down');
          break;
        case 'ArrowLeft':
          moveTiles('left');
          break;
        case 'ArrowRight':
          moveTiles('right');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board, gameOver, score]);

  // Initialize game
  useEffect(() => {
    initBoard();
  }, [initBoard]);

  // Get cell background color based on number
  const getCellBackground = (value: number | null) => {
    const colors: { [key: number]: string } = {
      2: 'bg-[#eee4da]',
      4: 'bg-[#ede0c8]',
      8: 'bg-[#f2b179]',
      16: 'bg-[#f59563]',
      32: 'bg-[#f67c5f]',
      64: 'bg-[#f65e3b]',
      128: 'bg-[#edcf72]',
      256: 'bg-[#edcc61]',
      512: 'bg-[#edc850]',
      1024: 'bg-[#edc53f]',
      2048: 'bg-[#edc22e]'
    };
    return value ? colors[value] || 'bg-[#3c3a32]' : 'bg-[#cdc1b4]';
  };

  // Get cell text color based on number
  const getCellTextColor = (value: number | null) => {
    return value && value > 4 ? 'text-white' : 'text-[#776e65]';
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-8">
      <div className="flex flex-col items-center gap-8">
        <div className="flex justify-between w-full max-w-md mb-4">
          <div className="text-2xl font-bold">Score: {score}</div>
          <button
            onClick={initBoard}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90"
          >
            New Game
          </button>
        </div>

        <div className="bg-[#bbada0] p-3 rounded-lg">
          {board.map((row, i) => (
            <div key={i} className="flex">
              {row.map((cell, j) => (
                <div
                  key={`${i}-${j}`}
                  className={`w-16 h-16 m-1 flex items-center justify-center rounded-md text-2xl font-bold
                    ${getCellBackground(cell)} ${getCellTextColor(cell)}`}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>

        {gameOver && !showNameInput && (
          <div className="text-xl font-bold text-destructive">
            Game Over! Final Score: {score}
          </div>
        )}

        {showNameInput && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <form onSubmit={handleNameSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Enter your name for the leaderboard</h3>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="w-full px-3 py-2 border rounded mb-4"
                placeholder="Your name"
                maxLength={20}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowNameInput(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Skip
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="mt-4 text-center text-muted-foreground">
          <p>Use arrow keys to move tiles</p>
          <p>Join the numbers and get to the 2048 tile!</p>
        </div>
      </div>

      <Leaderboard ref={leaderboardRef} />
    </div>
  );
}
