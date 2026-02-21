# Shubharamabh22 Events Website

Event management website for `@shubharamabh22` with Instagram gallery integration.

## Live Goal
- Brand: `@shubharamabh22`
- Theme: Event decor and celebration planning
- Hosting: Netlify (free shareable URL)

## Project Structure
- `index.html` - Website markup and content
- `styles.css` - Visual design and responsive layout
- `script.js` - Gallery rendering and interactions
- `instagram/raw/` - Downloaded Instagram images used by gallery
- `instagram/posts.json` - Gallery data source
- `scripts/sync_instagram.sh` - Instagram sync helper script
- `netlify.toml` - Netlify deployment config
- `vercel.json` - Vercel config (optional)

## Local Preview
```bash
python3 -m http.server 5500
```
Then open `http://localhost:5500`.

## Update Instagram Images
```bash
./scripts/sync_instagram.sh shub.arambh22
```

## Deploy on Netlify
1. Open [Netlify](https://app.netlify.com)
2. Connect this GitHub repo
3. Deploy from branch `main`

## Current Brand Text
- Handle: `@shubharamabh22`
- Hero: `Turning Your Moments Into Magical Celebrations.`
- Header brand: `Creative Events`
