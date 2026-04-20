export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  // Stats section
  const statsSection = document.createElement('div');
  statsSection.className = 'dashboard-stats';

  // Parse stats from first 4 rows
  for (let i = 0; i < Math.min(4, rows.length); i += 1) {
    const row = rows[i];
    const cells = [...row.children];
    if (cells.length >= 2) {
      const stat = document.createElement('div');
      stat.className = 'dashboard-stat-card';

      const value = document.createElement('div');
      value.className = 'stat-value';
      value.textContent = cells[0].textContent.trim();

      const label = document.createElement('div');
      label.className = 'stat-label';
      label.textContent = cells[1].textContent.trim();

      const meta = cells[2]?.textContent.trim();
      if (meta) {
        const metaEl = document.createElement('div');
        metaEl.className = 'stat-meta';
        metaEl.textContent = meta;
        stat.append(value, label, metaEl);
      } else {
        stat.append(value, label);
      }

      statsSection.appendChild(stat);
    }
  }

  // Progress bar section
  const progressSection = document.createElement('div');
  progressSection.className = 'dashboard-progress';

  const progressLabel = document.createElement('div');
  progressLabel.className = 'progress-label';
  progressLabel.textContent = 'Hackathon progress';

  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar-container';

  const progressFill = document.createElement('div');
  progressFill.className = 'progress-bar-fill';
  progressFill.style.width = '60%'; // Day 3 of 5

  const progressText = document.createElement('div');
  progressText.className = 'progress-text';
  progressText.textContent = 'Day 3 / 5';

  progressBar.appendChild(progressFill);
  progressSection.append(progressLabel, progressBar, progressText);

  block.append(statsSection, progressSection);
}
