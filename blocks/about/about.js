export default function decorate(block) {
  const rows = [...block.children];

  // First row becomes the main description
  const firstRow = rows[0];
  if (firstRow) {
    const desc = firstRow.querySelector('p');
    if (desc) {
      desc.classList.add('about-description');
    }
  }

  // Process "How it works" section
  const howItWorks = document.createElement('div');
  howItWorks.className = 'about-section';

  const howTitle = document.createElement('h3');
  howTitle.textContent = 'How it works';
  howItWorks.appendChild(howTitle);

  const stepsList = document.createElement('ol');
  stepsList.className = 'about-steps';

  // Rows 2-6 are the 5 steps
  for (let i = 1; i <= 5 && i < rows.length; i += 1) {
    const stepRow = rows[i];
    const stepText = stepRow.textContent.trim();
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

  // Tools section
  const toolsSection = document.createElement('div');
  toolsSection.className = 'about-section';

  const toolsTitle = document.createElement('h3');
  toolsTitle.textContent = 'Adobe tools you can use';
  toolsSection.appendChild(toolsTitle);

  const toolsGrid = document.createElement('div');
  toolsGrid.className = 'tools-grid';

  // Remaining rows are tools
  for (let i = 6; i < rows.length; i += 1) {
    const toolRow = rows[i];
    const toolName = toolRow.textContent.trim();
    if (toolName) {
      const toolCard = document.createElement('div');
      toolCard.className = 'tool-card';
      toolCard.textContent = toolName;
      toolsGrid.appendChild(toolCard);
    }
  }

  toolsSection.appendChild(toolsGrid);
  block.appendChild(toolsSection);

  // Add CTA button
  const ctaSection = document.createElement('div');
  ctaSection.className = 'about-cta';

  const ctaButton = document.createElement('a');
  ctaButton.href = '#';
  ctaButton.className = 'button secondary';
  ctaButton.textContent = 'Register your team →';

  ctaSection.appendChild(ctaButton);
  block.appendChild(ctaSection);
}
