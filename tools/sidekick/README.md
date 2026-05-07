# Franklin Sidekick Library

This directory contains the Franklin Sidekick Library configuration for the ACS AI League project.

## What is the Sidekick Library?

The Sidekick Library is a plugin for the AEM Sidekick that provides content authors with an intuitive UI to browse and insert blocks into their documents. It eliminates the need for authors to remember block syntax or variations.

## Files

- `library.html` - The main library interface that loads the Franklin Sidekick Library component
- `library.json` - Configuration file that defines all available blocks with their descriptions and examples

## How to Use

### For Content Authors

1. **Install the AEM Sidekick extension** in your browser (Chrome/Edge/Firefox)
2. **Access the library** by visiting:
   - During development: `http://localhost:3000/tools/sidekick/library.html?plugin=blocks`
   - On your live site: `https://your-domain.com/tools/sidekick/library.html?plugin=blocks`

3. **Browse blocks** in the library interface
4. **Click on a block** to see its details and example
5. **Copy the block** to insert it into your document

### For Developers

#### Adding a New Block to the Library

1. Open `tools/sidekick/library.json`
2. Add a new block entry to the `blocks` array:

```json
{
  "name": "Your Block Name",
  "path": "/blocks/your-block",
  "description": "Description of what your block does",
  "example": {
    "cells": [
      ["Cell 1 content", "Cell 2 content"],
      ["Row 2, Cell 1", "Row 2, Cell 2"]
    ]
  }
}
```

#### Customizing the Library

You can customize the library by modifying:
- **Title**: Edit the `<title>` tag in `library.html`
- **Base path**: Change the `base` property in the library config if your JSON file is in a different location
- **Styling**: Add custom styles in the `<style>` section of `library.html`

## Current Blocks

The library currently includes the following blocks:

- **Hero** - Eye-catching hero section with live status, statistics, and action badges
- **Cards** - Display content in card format
- **Columns** - Multi-column layout for content
- **Dashboard** - Dashboard display for hackathon statistics
- **Leaderboard** - Display team rankings and scores
- **Schedule** - Display hackathon schedule and timeline
- **Scoring** - Show scoring criteria and methodology
- **Teams** - Display team information and members
- **About** - About section for hackathon details
- **Fragment** - Embed reusable content fragments
- **Header** - Site header with navigation
- **Footer** - Site footer with links and information

## Resources

- [Franklin Sidekick Library Documentation](https://www.aem.live/developer/block-party/)
- [Open Source Project](https://github.com/adobe/franklin-sidekick-library)
- [Reference Implementation](https://github.com/dylandepass/rosalind-boilerplate/tree/main/tools/sidekick)
- [Demo](https://main--rosalind-boilerplate--dylandepass.aem.live/tools/sidekick/library.html?plugin=blocks)

## Testing

To test the library locally:

1. Start your local development server:
   ```bash
   npm start
   ```

2. Open the library in your browser:
   ```
   http://localhost:3000/tools/sidekick/library.html?plugin=blocks
   ```

3. Verify that all blocks are displayed correctly with their descriptions and examples

## Troubleshooting

- **Library not loading**: Ensure the `library.json` file is valid JSON and accessible
- **Blocks not appearing**: Check that the `path` values in `library.json` match your actual block directories
- **Styling issues**: Verify the Franklin Sidekick Library script is loading correctly from `https://www.hlx.live/tools/sidekick/library/index.js`
