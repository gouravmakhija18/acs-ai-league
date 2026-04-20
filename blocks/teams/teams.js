export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  // Create header
  const header = document.createElement('div');
  header.className = 'teams-header';

  const title = document.createElement('h2');
  title.className = 'teams-title';
  title.textContent = 'Meet the Teams';

  const subtitle = document.createElement('p');
  subtitle.className = 'teams-subtitle';
  subtitle.textContent = '12 teams competing across 5 Adobe product areas. Each team pitches one innovation idea powered by Adobe tools.';

  header.append(title, subtitle);
  block.appendChild(header);

  // Create teams grid
  const grid = document.createElement('div');
  grid.className = 'teams-grid';

  rows.forEach((row, index) => {
    const cells = [...row.children];
    if (cells.length >= 5) {
      const initials = cells[0]?.textContent.trim();
      const name = cells[1]?.textContent.trim();
      const focus = cells[2]?.textContent.trim();
      const score = cells[3]?.textContent.trim();
      const idea = cells[4]?.textContent.trim();
      const members = cells[5]?.textContent.trim().split(',') || [];
      const tools = cells[6]?.textContent.trim().split(',') || [];

      const card = document.createElement('div');
      card.className = 'team-card';

      // Header with avatar and info
      const cardHeader = document.createElement('div');
      cardHeader.className = 'team-card-header';

      const avatar = document.createElement('div');
      avatar.className = 'team-avatar';
      avatar.textContent = initials;

      // Set avatar color based on index
      const colors = [
        { bg: '#fef3c7', color: '#92400e' },
        { bg: '#eef2ff', color: '#4338ca' },
        { bg: '#f0fdf4', color: '#166534' },
        { bg: '#eff6ff', color: '#1d4ed8' },
        { bg: '#fff7ed', color: '#c2410c' },
        { bg: '#fdf4ff', color: '#7e22ce' },
      ];
      const colorSet = colors[index % colors.length];
      avatar.style.background = colorSet.bg;
      avatar.style.color = colorSet.color;

      const info = document.createElement('div');
      info.className = 'team-info';

      const nameEl = document.createElement('h3');
      nameEl.className = 'team-name';
      nameEl.textContent = name;

      const focusEl = document.createElement('div');
      focusEl.className = 'team-focus';
      focusEl.textContent = `Focus: ${focus}`;

      info.append(nameEl, focusEl);
      cardHeader.append(avatar, info);

      // Score badge (top right)
      if (score) {
        const scoreBadge = document.createElement('div');
        scoreBadge.className = 'team-score';
        scoreBadge.textContent = score;
        cardHeader.appendChild(scoreBadge);
      }

      // Idea
      const ideaEl = document.createElement('p');
      ideaEl.className = 'team-idea';
      ideaEl.textContent = `"${idea}"`;

      // Members
      const membersContainer = document.createElement('div');
      membersContainer.className = 'team-members';
      members.forEach((member) => {
        const memberChip = document.createElement('span');
        memberChip.className = 'member-chip';
        memberChip.textContent = member.trim();
        membersContainer.appendChild(memberChip);
      });

      // Tools
      const toolsContainer = document.createElement('div');
      toolsContainer.className = 'team-tools';
      tools.forEach((tool) => {
        const toolBadge = document.createElement('span');
        toolBadge.className = 'tool-badge';
        toolBadge.textContent = tool.trim();
        toolsContainer.appendChild(toolBadge);
      });

      card.append(cardHeader, ideaEl, membersContainer, toolsContainer);
      grid.appendChild(card);
    }
  });

  block.appendChild(grid);
}
