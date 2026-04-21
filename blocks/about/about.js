export default function decorate(block) {
  const rows = [...block.children];
  block.innerHTML = '';

  // Row 0: main description paragraph
  if (rows[0]) {
    const descWrapper = document.createElement('div');
    descWrapper.className = 'about-description';
    const p = document.createElement('p');
    p.textContent = rows[0].textContent.trim();
    descWrapper.appendChild(p);
    block.appendChild(descWrapper);
  }

  // Rows 1-5: "How it works" steps
  const howItWorks = document.createElement('div');
  howItWorks.className = 'about-section';

  const howTitle = document.createElement('h3');
  howTitle.textContent = 'How it works';
  howItWorks.appendChild(howTitle);

  const stepsList = document.createElement('ol');
  stepsList.className = 'about-steps';

  for (let i = 1; i <= 5 && i < rows.length; i += 1) {
    const stepText = rows[i].textContent.trim();
    if (stepText) {
      const li = document.createElement('li');
      li.className = 'about-step';

      const stepNumber = document.createElement('span');
      stepNumber.className = 'step-number';
      stepNumber.textContent = i;

      const stepContent = document.createElement('span');
      stepContent.className = 'step-content';
      stepContent.textContent = stepText;

      li.append(stepNumber, stepContent);
      stepsList.appendChild(li);
    }
  }

  howItWorks.appendChild(stepsList);
  block.appendChild(howItWorks);

  // Rows 6+: tools grid, or CTA if the row contains a link
  const toolsSection = document.createElement('div');
  toolsSection.className = 'about-section';

  const toolsTitle = document.createElement('h3');
  toolsTitle.textContent = 'Adobe tools you can use';
  toolsSection.appendChild(toolsTitle);

  const toolsGrid = document.createElement('div');
  toolsGrid.className = 'tools-grid';

  let ctaLink = null;

  for (let i = 6; i < rows.length; i += 1) {
    const link = rows[i].querySelector('a[href]');
    if (link && !ctaLink) {
      // First link row becomes the CTA button
      ctaLink = link;
    } else {
      const toolName = rows[i].textContent.trim();
      if (toolName) {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.textContent = toolName;
        toolsGrid.appendChild(toolCard);
      }
    }
  }

  toolsSection.appendChild(toolsGrid);
  block.appendChild(toolsSection);

  // CTA — from authored link or hidden if not provided
  if (ctaLink) {
    const ctaSection = document.createElement('div');
    ctaSection.className = 'about-cta';
    ctaLink.className = 'button secondary';
    ctaSection.appendChild(ctaLink);
    block.appendChild(ctaSection);
  }
}
