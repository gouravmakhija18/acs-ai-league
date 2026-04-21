import { getDayLabel, getConfig } from '../../scripts/hackathon.js';

export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const { totalDays } = getConfig();

  const header = document.createElement('div');
  header.className = 'lb-header';

  const title = document.createElement('h2');
  title.className = 'lb-title';
  title.textContent = 'Live Leaderboard';
  header.appendChild(title);

  // Optional first row with fewer than 4 cells is a custom subtitle override
  let teamRows = rows;
  let subtitleText = `Updated every 2 hrs \u00b7 ${getDayLabel()}`;

  if (rows.length && [...rows[0].children].length < 4) {
    const authored = rows[0].textContent.trim();
    if (authored) subtitleText = authored;
    teamRows = rows.slice(1);
  }

  const updated = document.createElement('div');
  updated.className = 'lb-updated';
  updated.textContent = subtitleText;
  header.appendChild(updated);

  block.appendChild(header);

  const teamsList = document.createElement('div');
  teamsList.className = 'lb-list';

  const colors = [
    { bg: '#fef3c7', color: '#92400e' },
    { bg: '#eef2ff', color: '#4338ca' },
    { bg: '#f0fdf4', color: '#166534' },
    { bg: '#eff6ff', color: '#1d4ed8' },
    { bg: '#fff7ed', color: '#c2410c' },
    { bg: '#fdf4ff', color: '#7e22ce' },
  ];

  const maxScore = teamRows.reduce((max, row) => {
    const cells = [...row.children];
    const score = parseInt(cells[3]?.textContent.trim(), 10) || 0;
    return Math.max(max, score);
  }, 1000);

  teamRows.forEach((row, index) => {
    const cells = [...row.children];
    if (cells.length >= 4) {
      const rank = index + 1;
      const initials = cells[0]?.textContent.trim();
      const name = cells[1]?.textContent.trim();
      const meta = cells[2]?.textContent.trim();
      const score = parseInt(cells[3]?.textContent.trim(), 10) || 0;

      const teamRow = document.createElement('div');
      teamRow.className = `lb-row rank-${rank}`;

      const rankEl = document.createElement('div');
      rankEl.className = 'lb-rank';
      rankEl.textContent = rank;

      const avatar = document.createElement('div');
      avatar.className = 'lb-avatar';
      avatar.textContent = initials;
      const colorSet = colors[index % colors.length];
      avatar.style.background = colorSet.bg;
      avatar.style.color = colorSet.color;

      const info = document.createElement('div');
      info.className = 'lb-info';

      const nameEl = document.createElement('div');
      nameEl.className = 'lb-name';
      nameEl.textContent = name;

      const metaEl = document.createElement('div');
      metaEl.className = 'lb-meta';
      metaEl.textContent = meta;

      info.append(nameEl, metaEl);

      const barWrap = document.createElement('div');
      barWrap.className = 'lb-bar-wrap';

      const barBg = document.createElement('div');
      barBg.className = 'lb-bar-bg';

      const barFill = document.createElement('div');
      barFill.className = 'lb-bar-fill';
      barFill.style.width = `${Math.min((score / maxScore) * 100, 100)}%`;

      barBg.appendChild(barFill);
      barWrap.appendChild(barBg);

      const scoreEl = document.createElement('div');
      scoreEl.className = 'lb-score';
      scoreEl.textContent = `${score} pts`;

      const badgeEl = document.createElement('span');
      if (rank === 1) {
        badgeEl.className = 'lb-badge lb-badge-gold';
        badgeEl.textContent = '1st';
      } else if (rank === 2) {
        badgeEl.className = 'lb-badge lb-badge-silver';
        badgeEl.textContent = '2nd';
      } else if (rank === 3) {
        badgeEl.className = 'lb-badge lb-badge-bronze';
        badgeEl.textContent = '3rd';
      } else {
        badgeEl.style.width = '36px';
      }

      teamRow.append(rankEl, avatar, info, barWrap, scoreEl, badgeEl);
      teamsList.appendChild(teamRow);
    }
  });

  block.appendChild(teamsList);

  // Day counter badge
  const dayBadge = document.createElement('div');
  dayBadge.className = 'lb-day-badge';
  dayBadge.textContent = `${totalDays}-Day Challenge`;
  block.appendChild(dayBadge);
}
