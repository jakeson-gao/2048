'use client';

import { forwardRef, useEffect, useState, useCallback, useImperativeHandle } from 'react';

interface LeaderboardEntry {
  name: string;
  score: number;
}

export interface LeaderboardRef {
  fetchLeaderboard: () => Promise<void>;
}

const Leaderboard = forwardRef<LeaderboardRef>((_, ref) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const fetchLeaderboard = useCallback(async () => {
    try {
      const response = await fetch('/api/leaderboard');
      const data = await response.json();
      setLeaderboard(data);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    fetchLeaderboard
  }));

  useEffect(() => {
    fetchLeaderboard();
    // Refresh leaderboard every 30 seconds
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, [fetchLeaderboard]);

  return (
    <div className="bg-[#bbada0] p-4 rounded-lg w-full max-w-xs">
      <h2 className="text-xl font-bold text-white mb-4 text-center">Leaderboard</h2>
      <div className="space-y-2">
        {leaderboard.map((entry, index) => (
          <div
            key={`${entry.name}-${index}`}
            className="flex justify-between items-center bg-[#eee4da] p-2 rounded"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#776e65] w-6">{index + 1}.</span>
              <span className="text-[#776e65]">{entry.name}</span>
            </div>
            <span className="font-bold text-[#776e65]">{entry.score}</span>
          </div>
        ))}
        {leaderboard.length === 0 && (
          <div className="text-center text-white">No scores yet</div>
        )}
      </div>
    </div>
  );
});

Leaderboard.displayName = 'Leaderboard';

export default Leaderboard;
