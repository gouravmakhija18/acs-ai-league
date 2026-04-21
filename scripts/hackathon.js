const HACKATHON_START = '2025-04-21'; // ISO date string of Day 1 (Monday)
const HACKATHON_DAYS = 5;

export function getConfig() {
  return { startDate: HACKATHON_START, totalDays: HACKATHON_DAYS };
}

export function getCurrentDay() {
  const start = new Date(HACKATHON_START);
  start.setHours(0, 0, 0, 0);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const elapsed = Math.floor((now - start) / 86400000) + 1;
  return Math.min(Math.max(elapsed, 1), HACKATHON_DAYS);
}

export function getDayStatus(dayNum) {
  const current = getCurrentDay();
  if (dayNum < current) return 'done';
  if (dayNum === current) return 'live';
  return 'upcoming';
}

export function getProgressPct() {
  return Math.min((getCurrentDay() / HACKATHON_DAYS) * 100, 100);
}

export function getDayLabel() {
  return `Day ${getCurrentDay()} of ${HACKATHON_DAYS}`;
}
