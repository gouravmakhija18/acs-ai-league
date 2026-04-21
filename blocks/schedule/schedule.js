import { getDayStatus } from '../../scripts/hackathon.js';

export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  const timeline = document.createElement('div');
  timeline.className = 'schedule-timeline';

  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length >= 4) {
      const dayNum = parseInt(cells[0]?.textContent.trim(), 10);
      const dayName = cells[1]?.textContent.trim();
      const title = cells[2]?.textContent.trim();
      const desc = cells[3]?.textContent.trim();
      const status = getDayStatus(dayNum);
      const tagsRaw = cells[4]?.textContent.trim() || '';
      const tags = tagsRaw ? tagsRaw.split(',') : [];

      const item = document.createElement('div');
      item.className = `schedule-item status-${status}`;

      const dot = document.createElement('div');
      dot.className = `schedule-dot status-${status}`;

      const day = document.createElement('div');
      day.className = 'schedule-day';

      const num = document.createElement('div');
      num.className = 'day-number';
      num.textContent = dayNum;

      const name = document.createElement('div');
      name.className = 'day-name';
      name.textContent = dayName;

      day.append(num, name);

      const content = document.createElement('div');
      content.className = 'schedule-content';

      const titleEl = document.createElement('h3');
      titleEl.className = 'schedule-title-text';
      titleEl.textContent = title;

      const descEl = document.createElement('p');
      descEl.className = 'schedule-desc';
      descEl.textContent = desc;

      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'schedule-tags';

      const statusLabel = status.charAt(0).toUpperCase() + status.slice(1);
      const statusTag = document.createElement('span');
      statusTag.className = `schedule-tag tag-${status}`;
      statusTag.textContent = status === 'live' ? 'Live now' : statusLabel;
      tagsContainer.appendChild(statusTag);

      tags.forEach((tag) => {
        const tagEl = document.createElement('span');
        tagEl.className = 'schedule-tag';
        tagEl.textContent = tag.trim();
        tagsContainer.appendChild(tagEl);
      });

      content.append(titleEl, descEl, tagsContainer);
      item.append(dot, day, content);
      timeline.appendChild(item);
    }
  });

  block.appendChild(timeline);
}
