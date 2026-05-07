# Franklin Sidekick Library Setup Guide

Complete guide to set up and use the Franklin Sidekick Library for the ACS AI League project.

## ✅ Installation Complete

The Franklin Sidekick Library has been successfully installed with:

- ✅ `tools/sidekick/library.html` - Main library interface
- ✅ `tools/sidekick/library.json` - Block configuration with all 12 blocks
- ✅ `tools/sidekick/README.md` - Documentation

## Quick Start

### Option 1: Using AEM CLI (Recommended for local development)

1. **Install the AEM CLI** (if not already installed):
   ```bash
   npm install -g @adobe/aem-cli
   ```

2. **Start the local server**:
   ```bash
   aem up
   ```

3. **Access the library**:
   Open in your browser: `http://localhost:3000/tools/sidekick/library.html?plugin=blocks`

### Option 2: Using a Simple HTTP Server

If you don't have the AEM CLI, use any static file server:

```bash
# Using Python 3
python3 -m http.server 3000

# OR using Node.js http-server (install first: npm install -g http-server)
npx http-server -p 3000

# OR using PHP
php -S localhost:3000
```

Then visit: `http://localhost:3000/tools/sidekick/library.html?plugin=blocks`

### Option 3: Direct File Access (Limited functionality)

You can open the file directly in your browser, but some features may not work:
```
file:///path/to/acs-ai-league/tools/sidekick/library.html?plugin=blocks
```

## Browser Extension Setup

### Install AEM Sidekick Extension

1. **Chrome/Edge**:
   - Visit [Chrome Web Store - AEM Sidekick](https://chrome.google.com/webstore/search/aem%20sidekick)
   - Click "Add to Chrome/Edge"

2. **Firefox**:
   - Visit [Firefox Add-ons - AEM Sidekick](https://addons.mozilla.org/en-US/firefox/search/?q=aem%20sidekick)
   - Click "Add to Firefox"

### Configure the Sidekick

1. Click the AEM Sidekick extension icon in your browser
2. Add your project configuration:
   ```json
   {
     "project": "ACS AI League",
     "plugins": [
       {
         "id": "library",
         "title": "Block Library",
         "url": "/tools/sidekick/library.html"
       }
     ]
   }
   ```

## Using the Library

### For Content Authors

1. **Browse Blocks**:
   - Navigate to the library URL
   - All available blocks are displayed with descriptions

2. **View Block Details**:
   - Click on any block to see its full description and example structure

3. **Copy Block Template**:
   - Click the copy button on a block
   - Paste into your Google Doc or Word document
   - The block structure will be created automatically

### For Developers

#### Adding New Blocks

When you create a new block, add it to `library.json`:

```json
{
  "name": "New Block",
  "path": "/blocks/new-block",
  "description": "What this block does",
  "example": {
    "cells": [
      ["Example content"]
    ]
  }
}
```

#### Updating Block Examples

Make examples realistic and helpful:
- Use actual content that shows the block's purpose
- Include all required columns/rows
- Show typical use cases

## Available Blocks

### Content Blocks
- **Hero** - Main landing section with statistics
- **Cards** - Content in card format
- **Columns** - Multi-column layouts
- **About** - Information sections

### Data Display Blocks
- **Dashboard** - Statistics and metrics
- **Leaderboard** - Rankings and scores
- **Schedule** - Event timelines
- **Scoring** - Scoring information
- **Teams** - Team details

### Utility Blocks
- **Fragment** - Reusable content
- **Header** - Navigation
- **Footer** - Site footer

## Deployment

### For Production Sites

Once your site is deployed to AEM (e.g., `https://main--acs-ai-league--yourorg.aem.live`):

1. The library will be automatically available at:
   ```
   https://main--acs-ai-league--yourorg.aem.live/tools/sidekick/library.html?plugin=blocks
   ```

2. Update your Sidekick configuration to use the production URL

### For GitHub Pages

If deploying to GitHub Pages, ensure the `tools` directory is included in your deployment.

## Troubleshooting

### Library Not Loading

**Problem**: Blank page or library doesn't appear

**Solutions**:
- Check browser console for errors
- Verify you're accessing via HTTP server (not file://)
- Ensure `library.json` is valid JSON (use a JSON validator)
- Check that the Franklin library script loads from `https://www.hlx.live/tools/sidekick/library/index.js`

### Blocks Not Showing

**Problem**: Library loads but no blocks appear

**Solutions**:
- Verify `library.json` is accessible at `/tools/sidekick/library.json`
- Check JSON syntax (no trailing commas, proper quotes)
- Ensure `base` path in `library.html` is correct
- Clear browser cache

### Block Paths Don't Match

**Problem**: Clicking blocks shows 404 errors

**Solutions**:
- Verify block paths in `library.json` match actual block directories
- Check that block files exist (e.g., `/blocks/hero/hero.js`)
- Ensure proper capitalization (case-sensitive on some servers)

### CORS Issues

**Problem**: Cross-origin errors in console

**Solutions**:
- Use proper HTTP server (AEM CLI recommended)
- Don't use `file://` protocol
- Check server CORS configuration if using custom server

## Advanced Configuration

### Custom Styling

Add custom CSS to `library.html`:

```html
<style>
  sidekick-library {
    --library-primary-color: #your-color;
  }
</style>
```

### Multiple Block Sets

You can create multiple library configurations:

1. Create `library-advanced.json` for advanced blocks
2. Create `library-advanced.html` pointing to the new JSON
3. Add links to both in your Sidekick configuration

## Resources & Links

- 📚 [Franklin Documentation](https://www.aem.live/docs/)
- 🎨 [Block Party](https://www.aem.live/developer/block-party/)
- 💻 [Sidekick Library Repo](https://github.com/adobe/franklin-sidekick-library)
- 🎥 [Demo Site](https://main--rosalind-boilerplate--dylandepass.aem.live/tools/sidekick/library.html?plugin=blocks)

## Need Help?

- Check the [README.md](./README.md) for basic usage
- Review [AEM documentation](https://www.aem.live/docs/)
- Ask questions in the Adobe Experience Manager community

---

**Status**: ✅ Setup Complete - Ready to use!
