export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  // Create header
  const header = document.createElement('div');
  header.className = 'lb-header';

  const title = document.createElement('h2');
  title.className = 'lb-title';
  title.textContent = 'Live Leaderboard';

  const updated = document.createElement('div');
  updated.className = 'lb-updated';
  updated.textContent = 'Updated every 2 hrs · Day 3 of 5';

  header.append(title, updated);
  block.appendChild(header);

  // Create teams list
  const teamsList = document.createElement('div');
  teamsList.className = 'lb-list';

  rows.forEach((row, index) => {
    const cells = [...row.children];
    if (cells.length >= 4) {
      const rank = index + 1;
      const initials = cells[0]?.textContent.trim();
      const name = cells[1]?.textContent.trim();
      const meta = cells[2]?.textContent.trim();
      const score = parseInt(cells[3]?.textContent.trim(), 10) || 0;

      const teamRow = document.createElement('div');
      teamRow.className = `lb-row rank-${rank}`;

      // Rank
      const rankEl = document.createElement('div');
      rankEl.className = 'lb-rank';
      rankEl.textContent = rank;

      // Avatar
      const avatar = document.createElement('div');
      avatar.className = 'lb-avatar';
      avatar.textContent = initials;

      // Set avatar color based on rank
      const colors = [
        { bg: '#fef3c7', color: '#92400e' }, // Gold
        { bg: '#eef2ff', color: '#4338ca' }, // Blue
        { bg: '#f0fdf4', color: '#166534' }, // Green
        { bg: '#eff6ff', color: '#1d4ed8' }, // Sky
        { bg: '#fff7ed', color: '#c2410c' }, // Orange
        { bg: '#fdf4ff', color: '#7e22ce' }, // Purple
      ];
      const colorSet = colors[index % colors.length];
      avatar.style.background = colorSet.bg;
      avatar.style.color = colorSet.color;

      // Info
      const info = document.createElement('div');
      info.className = 'lb-info';

      const nameEl = document.createElement('div');
      nameEl.className = 'lb-name';
      nameEl.textContent = name;

      const metaEl = document.createElement('div');
      metaEl.className = 'lb-meta';
      metaEl.textContent = meta;

      info.append(nameEl, metaEl);

      // Score bar
      const barWrap = document.createElement('div');
      barWrap.className = 'lb-bar-wrap';

      const barBg = document.createElement('div');
      barBg.className = 'lb-bar-bg';

      const barFill = document.createElement('div');
      barFill.className = 'lb-bar-fill';
      const percentage = Math.min((score / 1000) * 100, 100);
      barFill.style.width = `${percentage}%`;

      barBg.appendChild(barFill);
      barWrap.appendChild(barBg);

      // Score
      const scoreEl = document.createElement('div');
      scoreEl.className = 'lb-score';
      scoreEl.textContent = `${score} pts`;

      // Badge for top 3
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
}
