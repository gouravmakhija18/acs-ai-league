import { getCurrentDay, getConfig, getProgressPct } from '../../scripts/hackathon.js';

export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const { totalDays } = getConfig();
  const currentDay = getCurrentDay();
  const progressPct = getProgressPct();

  const statsSection = document.createElement('div');
  statsSection.className = 'dashboard-stats';

  rows.forEach((row) => {
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
  });

  block.appendChild(statsSection);

  const progressSection = document.createElement('div');
  progressSection.className = 'dashboard-progress';

  const progressLabelEl = document.createElement('div');
  progressLabelEl.className = 'progress-label';
  progressLabelEl.textContent = 'Hackathon progress';

  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar-container';

  const progressFill = document.createElement('div');
  progressFill.className = 'progress-bar-fill';
  progressFill.style.width = `${progressPct}%`;

  const progressText = document.createElement('div');
  progressText.className = 'progress-text';
  progressText.textContent = `Day ${currentDay} / ${totalDays}`;

  progressBar.appendChild(progressFill);
  progressSection.append(progressLabelEl, progressBar, progressText);
  block.appendChild(progressSection);
}
