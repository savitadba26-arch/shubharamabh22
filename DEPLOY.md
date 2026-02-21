# Deploy your website (free public link)

## Option 1: Netlify (recommended, easiest)
1. Create a free account at https://netlify.com using Google/GitHub.
2. Click **Add new site** -> **Deploy manually**.
3. Drag and drop this full folder:
   `/Users/savitapandey/Documents/New project`
4. After deploy, you get a public link like:
   `https://your-site-name.netlify.app`
5. To rename it: **Site settings** -> **Change site name**.

## Option 2: Vercel (also free)
1. Create a free account at https://vercel.com.
2. Click **Add New...** -> **Project**.
3. Import this folder/repo.
4. Framework preset: **Other** (static site).
5. Deploy to get a link like:
   `https://your-site-name.vercel.app`

## If you want a custom domain
- Free hosting subdomain is included (`.netlify.app` / `.vercel.app`).
- Paid custom domains (`.com`, `.in`) can be connected anytime.

## Keep Instagram gallery updated
Run:
```bash
./scripts/sync_instagram.sh shub.arambh22
```
Then redeploy to publish new photos.
