# Shubharamabh22 Events Website

A modern, colorful event-management website showcasing Instagram highlights, services, and contact details.

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
Open `index.html` directly, or run a local static server:

```bash
python3 -m http.server 5500
```

Then open `http://localhost:5500`.

## Update Instagram Images
```bash
./scripts/sync_instagram.sh shub.arambh22
```

If you want higher success for all posts, run with Instagram login:

```bash
IG_LOGIN=your_username ./scripts/sync_instagram.sh shub.arambh22
```

## Deploy on Netlify
1. Open [Netlify](https://app.netlify.com)
2. Open your site
3. Deploy manually by dragging this project folder, or connect this Git repo
4. Rename your site to your preferred subdomain

## Current Brand Text
- Handle used on website: `@shubharamabh22`
- Hero headline: `Turning Your Moments Into Magical Celebrations.`
- Header brand text: `Creative Events`
