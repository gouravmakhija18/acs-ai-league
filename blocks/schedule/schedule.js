export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  // Create header
  const header = document.createElement('h2');
  header.className = 'schedule-title';
  header.textContent = '5-Day Hackathon Schedule';
  block.appendChild(header);

  // Create timeline
  const timeline = document.createElement('div');
  timeline.className = 'schedule-timeline';

  rows.forEach((row, index) => {
    const cells = [...row.children];
    if (cells.length >= 4) {
      const dayNum = cells[0]?.textContent.trim();
      const dayName = cells[1]?.textContent.trim();
      const title = cells[2]?.textContent.trim();
      const desc = cells[3]?.textContent.trim();
      const status = cells[4]?.textContent.trim().toLowerCase() || 'upcoming';
      const tags = cells[5]?.textContent.trim().split(',') || [];

      const item = document.createElement('div');
      item.className = `schedule-item status-${status}`;

      // Status dot
      const dot = document.createElement('div');
      dot.className = `schedule-dot status-${status}`;

      // Day info
      const day = document.createElement('div');
      day.className = 'schedule-day';

      const num = document.createElement('div');
      num.className = 'day-number';
      num.textContent = dayNum;

      const name = document.createElement('div');
      name.className = 'day-name';
      name.textContent = dayName;

      day.append(num, name);

      // Content
      const content = document.createElement('div');
      content.className = 'schedule-content';

      const titleEl = document.createElement('h3');
      titleEl.className = 'schedule-title-text';
      titleEl.textContent = title;

      const descEl = document.createElement('p');
      descEl.className = 'schedule-desc';
      descEl.textContent = desc;

      // Tags
      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'schedule-tags';

      tags.forEach((tag) => {
        const tagEl = document.createElement('span');
        const trimmedTag = tag.trim();
        tagEl.className = 'schedule-tag';
        tagEl.textContent = trimmedTag;

        // Add status-specific class to first tag
        if (tags.indexOf(tag) === 0) {
          tagEl.classList.add(`tag-${status}`);
        }
        tagsContainer.appendChild(tagEl);
      });

      content.append(titleEl, descEl, tagsContainer);
      item.append(dot, day, content);
      timeline.appendChild(item);
    }
  });

  block.appendChild(timeline);
}
