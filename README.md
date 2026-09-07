# Lena Eys — Engineering Portfolio

A modern, responsive portfolio website designed for engineering co-op applications.

## Files
- `index.html` — page structure and content
- `styles.css` — responsive visual design
- `script.js` — clickable project cards / expandable descriptions
- `Lena-Eys-Resume.pdf` — resume linked from the Resume section

## Adding project photos
The four project cards currently contain visual placeholders. Replace each placeholder with an image.

The easiest method:
1. Put your image files in an `images/` folder.
2. In `index.html`, replace the `<div class="placeholder">...</div>` inside a project image with:
   `<img src="images/your-photo.jpg" alt="Descriptive project photo">`
3. Add this CSS if needed:
   `.project-image img { width:100%; height:100%; object-fit:cover; }`

Suggested project photos:
1. Flip-Up Trip Perturbation Device — CAD, prototype, breadboard/electronics, or test setup.
2. Haptic Vision — robotic prototype, Unity interface, or 3D model.
3. Neuromechanics Research — force plate, OptiTrack markers, oscilloscope/data collection.
4. Science Maker Lab — SolidWorks/Arduino project or 3D-printed housing.

## Publishing
This is a static website and can be hosted on GitHub Pages, Netlify, Vercel, or another static web host.
