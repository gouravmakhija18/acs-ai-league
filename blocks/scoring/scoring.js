export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  // Section 1: Scoring criteria
  const criteriaSection = document.createElement('div');
  criteriaSection.className = 'scoring-section';

  const criteriaTitle = document.createElement('h2');
  criteriaTitle.textContent = 'How Scores Are Calculated';
  criteriaSection.appendChild(criteriaTitle);

  const criteriaList = document.createElement('div');
  criteriaList.className = 'scoring-criteria';

  // Parse criteria rows (first 5 rows)
  for (let i = 0; i < 5 && i < rows.length; i += 1) {
    const row = rows[i];
    const cells = [...row.children];
    if (cells.length >= 2) {
      const criterion = cells[0]?.textContent.trim();
      const weight = parseInt(cells[1]?.textContent.trim(), 10) || 0;

      const item = document.createElement('div');
      item.className = 'criteria-item';

      const label = document.createElement('div');
      label.className = 'criteria-label';
      label.textContent = criterion;

      const barContainer = document.createElement('div');
      barContainer.className = 'criteria-bar-container';

      const bar = document.createElement('div');
      bar.className = 'criteria-bar';
      bar.style.width = `${weight}%`;

      const percentage = document.createElement('span');
      percentage.className = 'criteria-percentage';
      percentage.textContent = `${weight}%`;

      barContainer.append(bar, percentage);
      item.append(label, barContainer);
      criteriaList.appendChild(item);
    }
  }

  criteriaSection.appendChild(criteriaList);
  block.appendChild(criteriaSection);

  // Section 2: Judging panel
  const judgesSection = document.createElement('div');
  judgesSection.className = 'scoring-section';

  const judgesTitle = document.createElement('h2');
  judgesTitle.textContent = 'Judging Panel';
  judgesSection.appendChild(judgesTitle);

  const judgesGrid = document.createElement('div');
  judgesGrid.className = 'judges-grid';

  // Parse judge rows (rows 5-8)
  for (let i = 5; i < 9 && i < rows.length; i += 1) {
    const row = rows[i];
    const cells = [...row.children];
    if (cells.length >= 3) {
      const initials = cells[0]?.textContent.trim();
      const name = cells[1]?.textContent.trim();
      const role = cells[2]?.textContent.trim();
      const track = cells[3]?.textContent.trim();

      const judgeCard = document.createElement('div');
      judgeCard.className = 'judge-card';

      const avatar = document.createElement('div');
      avatar.className = 'judge-avatar';
      avatar.textContent = initials;

      const info = document.createElement('div');
      info.className = 'judge-info';

      const nameEl = document.createElement('div');
      nameEl.className = 'judge-name';
      nameEl.textContent = name;

      const roleEl = document.createElement('div');
      roleEl.className = 'judge-role';
      roleEl.textContent = role;

      info.append(nameEl, roleEl);

      if (track) {
        const trackBadge = document.createElement('span');
        trackBadge.className = 'judge-track';
        trackBadge.textContent = track;
        judgeCard.append(avatar, info, trackBadge);
      } else {
        judgeCard.append(avatar, info);
      }

      judgesGrid.appendChild(judgeCard);
    }
  }

  judgesSection.appendChild(judgesGrid);
  block.appendChild(judgesSection);

  // Section 3: Prizes
  const prizesSection = document.createElement('div');
  prizesSection.className = 'scoring-section';

  const prizesTitle = document.createElement('h2');
  prizesTitle.textContent = 'Prizes';
  prizesSection.appendChild(prizesTitle);

  const prizesGrid = document.createElement('div');
  prizesGrid.className = 'prizes-grid';

  // Parse prize rows (remaining rows)
  for (let i = 9; i < rows.length; i += 1) {
    const row = rows[i];
    const cells = [...row.children];
    if (cells.length >= 2) {
      const place = cells[0]?.textContent.trim();
      const prize = cells[1]?.textContent.trim();

      const prizeCard = document.createElement('div');
      prizeCard.className = 'prize-card';

      const placeEl = document.createElement('div');
      placeEl.className = 'prize-place';
      placeEl.textContent = place;

      const prizeEl = document.createElement('div');
      prizeEl.className = 'prize-text';
      prizeEl.textContent = prize;

      prizeCard.append(placeEl, prizeEl);
      prizesGrid.appendChild(prizeCard);
    }
  }

  prizesSection.appendChild(prizesGrid);
  block.appendChild(prizesSection);
}
