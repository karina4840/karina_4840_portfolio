# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

1. Make sure your code is pushed to a GitHub repository named `neon_portfolio`
2. Ensure you have Node.js and npm installed

## Deployment Steps

### 1. Build the Project

First, build your project to make sure everything works:

```bash
npm run build
```

### 2. Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
- Build your project
- Create a `gh-pages` branch
- Push the built files to GitHub

### 3. Configure GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

### 4. Access Your Site

Your portfolio will be available at:
`https://karina4840.github.io/neon_portfolio`

## Important Notes

### Routing
- The app uses HashRouter instead of BrowserRouter for GitHub Pages compatibility
- URLs will look like: `https://karina4840.github.io/neon_portfolio/#/homepage`

### Assets
- All asset paths have been updated to use relative paths
- Make sure your assets are in the `public/assets/` folder

### Updates
- To update your deployed site, simply run `npm run deploy` again
- Changes will be live in a few minutes

## Troubleshooting

### If the site doesn't load:
1. Check that the repository name matches exactly: `neon_portfolio`
2. Verify the GitHub Pages source is set to `gh-pages` branch
3. Wait a few minutes for the initial deployment

### If assets don't load:
1. Ensure all assets are in the `public/assets/` folder
2. Check that file paths use relative paths (starting with `./`)

### If routing doesn't work:
1. Make sure you're using HashRouter (already configured)
2. URLs should include the `#` symbol for client-side routing

## Local Development

To test locally:
```bash
npm start
```

The site will be available at `http://localhost:4028` 