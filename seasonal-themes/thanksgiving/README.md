# Thanksgiving theme (approved by Josh, Nov 1, 2026)

Live every year Nov 1 through the Sunday after Thanksgiving (2026: Nov 1 – Nov 29); take down the Monday after (2026: Nov 30).

What it does: dismissible "Happy Thanksgiving from BuildBin" banner (remembers dismissal in localStorage key `bb-tg-2026-dismissed`; bump the year each season),
harvest glow on the navy header, swaying inline-SVG autumn leaves, pumpkins in the header's bottom corners, three original cartoon turkeys
walking along the header bottom (two on phones), 🍂 before section headings, orange accent. All decorations are pointer-events:none, aria-hidden,
clipped by the header (no page overflow) and stand still under prefers-reduced-motion. On phones (≤600px) the header gets padding-bottom:3.4rem for the turkey lane.

Files: `thanksgiving.css`, `thanksgiving.js` (saved copies here; live copies in assets/).

Install (put up):
1. Copy thanksgiving.css and thanksgiving.js into assets/.
2. On every HTML page (index, sponsor, sponsor-thanks, credits, privacy and all category/*.html), add the two THANKSGIVING THEME snippets
   exactly as in commit 70a1342 (e.g. `git show 70a1342:index.html`):
   - right after `<link rel="stylesheet" href="style.css">`:
     `<!-- THANKSGIVING THEME (seasonal): delete from here... --><link rel="stylesheet" href="assets/thanksgiving.css"><!-- ...to here, plus the matching THANKSGIVING THEME script line at the end of the page -->`
   - right before `</body>`:
     `<!-- THANKSGIVING THEME (seasonal): delete this line to remove --><script defer src="assets/thanksgiving.js"></script>`
   Paths are relative: `assets/...` on root pages, `../assets/...` on category/ pages (category pages link `../style.css`).
3. Banner links go to category/kids.html and category/led-lighting.html; confirm they still exist.

Remove (take down): delete the THANKSGIVING THEME lines from every page and delete assets/thanksgiving.css and assets/thanksgiving.js.
Quick check afterwards: `grep -rl thanksgiving --include=*.html .` should return nothing outside seasonal-themes/.
