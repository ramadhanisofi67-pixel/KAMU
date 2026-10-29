# Sofi for Alif

A personal romantic website created by **Sofi Ramadhani** for **Muhammad Alif El Sulthan**.

## Project Structure

```
sofi-for-alif/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── my-love-westlife.mp3   # optional, place the song here
    ├── cover.jpg               # optional, used as background cover
    ├── sunset.jpg              # optional, used in slide 4 gallery
    └── letter.jpg              # optional, used in slide 2
```

## How to Run Locally

1. Open `index.html` in a modern browser (Chrome, Firefox, Edge, Safari). No server is required.
2. If you encounter autoplay being blocked, click the **Play ♡** button that appears in the bottom‑right corner.
3. For a local server (useful for Chrome’s autoplay policy), you can run:
   ```bash
   cd sofi-for-alif
   python -m http.server 8000
   ```
   Then open `http://localhost:8000`.

## Adding / Replacing Assets

- **Audio**: Place an MP3 named `my-love-westlife.mp3` inside `assets/`. The player will use it automatically.
- **Images**: Replace `cover.jpg`, `sunset.jpg`, `letter.jpg` with your own photos. Missing files are handled gracefully with a subtle background.

## Publishing

Deploy the folder to any static‑hosting service (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). The site works purely client‑side.

## Notes on Autoplay

Most browsers block autoplay with sound until the user interacts. The page attempts to play on load; if blocked, the **Play ♡** button lets the user start the music.

---

*Created with pure HTML, CSS and vanilla JavaScript – no frameworks or backend required.*
