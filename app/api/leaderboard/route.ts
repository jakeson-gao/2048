import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'leaderboard.json');

// Ensure the data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read leaderboard data from file
async function readLeaderboard() {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is invalid, return empty array
    return [];
  }
}

// Write leaderboard data to file
async function writeLeaderboard(data: any) {
  await ensureDataDirectory();
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const leaderboard = await readLeaderboard();
  return NextResponse.json(leaderboard.sort((a: any, b: any) => b.score - a.score).slice(0, 10));
}

export async function POST(request: Request) {
  const { name, score } = await request.json();

  if (!name || typeof score !== 'number') {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
  }

  const leaderboard = await readLeaderboard();
  const existingPlayerIndex = leaderboard.findIndex((player: any) => player.name === name);

  if (existingPlayerIndex !== -1) {
    // Update score if higher than existing
    if (score > leaderboard[existingPlayerIndex].score) {
      leaderboard[existingPlayerIndex].score = score;
    }
  } else {
    // Add new player
    leaderboard.push({ name, score });
  }

  // Sort and save top scores
  const sortedLeaderboard = leaderboard.sort((a: any, b: any) => b.score - a.score);
  await writeLeaderboard(sortedLeaderboard);

  // Return top 10
  return NextResponse.json(sortedLeaderboard.slice(0, 10));
}
