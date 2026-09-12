# Lena Eys — Portfolio Site

A three-page static site: **Intro**, **Projects**, and **Resume**, linked by the
top navigation bar. Each is a separate HTML page (not a single-page app), so the
URL changes as you navigate — e.g. `yoursite.com/projects.html`.

## Files

```
index.html      → Intro page (bio, headshot, contact links)
projects.html   → Projects page (6 project cards with click-to-expand descriptions)
resume.html     → Resume page (styled from the resume PDF; has a "Print / save as PDF" link)
style.css       → Shared styles (brown + gold triangle theme)
script.js       → Accordion behaviour for the projects page
```

No build step, no dependencies to install — just plain HTML/CSS/JS.

## Replacing the placeholder images

Right now the headshot and the 6 project photos are drawn placeholders (initials
badge + triangle patterns) since no image files were supplied. To swap in real
photos:

1. Add your image files into this folder (e.g. an `assets/` folder).
2. In `index.html`, replace:
   ```html
   <div class="hf-placeholder" role="img" aria-label="Headshot of Lena Eys">LE</div>
   ```
   with:
   ```html
   <img src="assets/headshot.jpg" alt="Headshot of Lena Eys">
   ```
3. In `projects.html`, replace each `<div class="project-photo">...</div>` block's
   inner `<svg>` with an `<img src="assets/project-1.jpg" alt="...">` (same class
   on the wrapper keeps the sizing/frame).

## Deploying on GitHub Pages

1. Create a new GitHub repository (e.g. `lena-eys-portfolio`).
2. Push these files to the repository root (or to a `docs/` folder — see step 4).
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", choose
   the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site at:
   `https://<your-username>.github.io/<repo-name>/`
   It can take a minute or two to go live after the first push.

Since the pages link to each other with plain relative paths (`index.html`,
`projects.html`, `resume.html`), no extra configuration is needed for the
site to work under a repository subpath.

## Editing content later

- **Bio / contact links** → `index.html`, inside `<div class="bio-block">` and
  `<div class="intro-actions">`.
- **Projects** → `projects.html`, each project is one `<article class="project-card">`
  block; duplicate a block to add a 7th project, or delete one to remove it.
- **Resume** → `resume.html` mirrors the resume PDF's sections; edit the text
  directly, it's plain HTML, no template syntax.
- **Colors** → the palette lives at the top of `style.css` under `:root` (e.g.
  `--brown-deep`, `--gold`, `--cream`).
