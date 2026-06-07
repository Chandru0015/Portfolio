# Chandru T — Cyber Security Terminal Portfolio

Interactive terminal-style portfolio. Pure static HTML/CSS/JS — no build step. Deploys anywhere.

## Run locally
Just open `index.html` in a browser, or:
```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Menu order
1. About Chandru
2. Projects
3. Skills
4. Resume
5. Internships
6. Certifications
7. Contact

## Deploy

### GitHub Pages
1. Create a repo and push these files to `main`.
2. Repo → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / root.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

### Vercel
1. Push to GitHub, then on vercel.com → New Project → Import the repo.
2. Framework Preset: **Other**. Build Command: *(leave empty)*. Output Directory: `.`
3. Deploy.

Or via CLI:
```bash
npm i -g vercel
vercel --prod
```

### Netlify
- Drag the folder into https://app.netlify.com/drop, OR
- Connect your GitHub repo. Build command: *(none)*. Publish directory: `.`

### Cloudflare Pages
- Pages → Create project → Connect repo. Build command: *(none)*. Output: `/`.

### Surge.sh
```bash
npm i -g surge
surge .
```

## Files
- `index.html` — markup
- `styles.css` — terminal theme
- `script.js` — boot animation, menu navigation, clock
- `assets/profile.jpeg` — profile image
- `assets/Chandru_T_Resume.pdf` — downloadable resume
