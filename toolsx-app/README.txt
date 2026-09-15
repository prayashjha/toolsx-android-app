ToolsX App — PWA Package
=========================

WHAT THIS IS
-------------
A mobile-app-style PWA (Progressive Web App) containing 52 of your ToolsX
tools — grouped by category, with a home screen, search bar, back
navigation, light/dark mode toggle, and offline support (service worker).
All 33 "AI vs AI" comparison posts, news/guide articles, and static pages
(About/Privacy/Contact/etc.) were left out — only working tools are inside.

FILES
-----
index.html        -> home screen (tool grid + search)
app.css / app.js  -> shared app shell + theme toggle
manifest.json     -> PWA manifest (app name, icons, colors)
sw.js             -> service worker (offline caching)
icons/            -> app icons (192px, 512px, maskable 512px)
tools/*.html      -> each tool, wrapped in the app shell (original
                     tool functionality untouched)

HOW TO GET A REAL .APK FROM THIS
----------------------------------
I cannot compile an .apk directly in this chat (no Android SDK / no
internet access in this environment). Here is the real, working path
— 100% free, no coding needed:

STEP 1 — Host these files at a public URL
  Pick any ONE:
  a) GitHub Pages (free): create a repo, upload this folder's contents,
     enable Pages in repo Settings -> get a URL like
     https://yourname.github.io/toolsx-app/
  b) Netlify Drop (free, no signup for a quick link):
     https://app.netlify.com/drop -> drag this folder in -> get a URL
  c) A subfolder on toolsx.in itself (e.g. toolsx.in/app/) if your
     Blogger/hosting setup allows static file uploads via Cloudflare
     Pages or similar.

STEP 2 — Generate the APK with PWABuilder (free, official Microsoft tool)
  1. Go to https://www.pwabuilder.com
  2. Paste your hosted URL (from Step 1) and click "Start"
  3. It scans manifest.json + sw.js automatically (already configured
     correctly in this package)
  4. Click "Package for Stores" -> choose "Android"
  5. Download the generated signed .apk / .aab
  6. Install the .apk directly on your phone, or upload the .aab to
     Google Play Console to publish it

STEP 3 (optional) — Test as a PWA first
  Open your hosted URL on an Android phone in Chrome -> menu ->
  "Add to Home Screen" -> it installs and behaves like a real app
  immediately, even before you build the .apk.

NOTES
-----
- URLs of your original Blogger posts are NOT touched — this is a
  separate, additional app package.
- Each tool's original HTML/CSS/JS logic is preserved as-is; only the
  navigation shell (header, back button, theme toggle) was added
  around it.
- If a tool's original code expected Blogger's site-wide dark-mode
  class (.dark-mode on <html>/<body>), it will keep working the same
  way here — app.js applies/removes that same class.
