export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const eyebrow = document.createElement('div');
  eyebrow.className = 'hero-eyebrow';
  eyebrow.innerHTML = '<span class="hero-live-dot"></span> Season 1 · Live Now';

  const title = rows[0]?.querySelector('h1,h2,p');
  const titleEl = document.createElement('h1');
  titleEl.innerHTML = (title?.textContent || 'ACS AI League').replace('ACS', '<span>ACS</span>');

  const desc = rows[1]?.querySelector('p');
  const descEl = document.createElement('p');
  descEl.textContent = desc?.textContent || 'Internal Innovation Hackathon — powered by Adobe Experience Manager';

  const stats = document.createElement('div');
  stats.className = 'hero-stats';
  const statsData = [
    { value: '12', label: 'Teams' },
    { value: '84', label: 'Participants' },
    { value: 'Day 3', label: 'of 5' },
    { value: '7', label: 'Ideas Pitched' },
  ];
  statsData.forEach(({ value, label }) => {
    stats.innerHTML += `
      <div class="hero-stat-item">
        <div class="hero-stat-value">${value}</div>
        <div class="hero-stat-label">${label}</div>
      </div>`;
  });

  const badges = document.createElement('div');
  badges.className = 'hero-badges';
  badges.innerHTML = `
    <a href="/leaderboard" class="hero-badge hero-badge-primary">View Leaderboard</a>
    <a href="/teams" class="hero-badge hero-badge-secondary">Meet the Teams</a>
    <a href="/schedule" class="hero-badge hero-badge-secondary">View Schedule</a>
  `;

  block.append(eyebrow, titleEl, descEl, stats, badges);
}
