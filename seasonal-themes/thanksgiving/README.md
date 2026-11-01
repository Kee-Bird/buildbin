# Thanksgiving theme (approved by Josh, Nov 1, 2026)

Live every year Nov 1 through the Sunday after Thanksgiving (2026: Nov 1 – Nov 29); take down the Monday after (2026: Nov 30).

What it does: dismissible "Happy Thanksgiving from BuildBin" banner (remembers dismissal in localStorage key `bb-tg-2026-dismissed`; bump the year each season),
harvest glow on the navy header, swaying inline-SVG autumn leaves, pumpkins in the header's bottom corners, three original derpy cartoon turkeys, simple flat style since the Nov 1 "simpler" update (solid fall colors, bold outline, no gradients or highlights; a two-row tail fan, googly mismatched eyes with pupils that roll now and then, goofy grin, swinging floppy wattle, stick legs, cowlick; #1 tongue out, #2 cross-eyed with a tilted head, #3 dazed look-up with a tilt and tongue)
walking slowly and hopping now and then (staggered squash-and-stretch jumps; walk 100/125/115s, hop every 12/14/10.5s) along the header bottom (two on phones; ~1.5x size since the Nov 1 hop update), and (since the Nov 1 peck update) pecking at the ground: every 8–22s at random, staggered per turkey and only while it's on the ground between hops, a turkey stops (walk/hop/waddle/legs pause), leans its body ~5° and bobs its neck+head down 2 or 3 times (3.2s / 4.2s, beak to the ground, wattle swinging faster), then carries on. The pecking is driven by a small timer in thanksgiving.js that toggles `tg-pecking` + `tg-peck2`/`tg-peck3` on the turkey; the head and neck rotate together around the neck base (hidden inside the body) so they never separate; per-turkey peck angle is the `--pk` custom property (80/82/76deg). No pecking under prefers-reduced-motion or while the tab is hidden. 🍂 before section headings, orange accent. Each turkey's whole drawing (tail fan, feet, wattle, and the head at the bottom of a peck, including the fan/leg/wattle/peck animations) fits inside its SVG viewBox (`0 8 108 83`; widened from 96 for the pecking head, with the turkey boxes widened to match so they stay the same size) with a margin. Keep it that way when redrawing: Safari/iPad clips an animated SVG to its own box even with overflow:visible, which is what sliced the old tail tips flat.
All decorations are pointer-events:none, aria-hidden,
clipped by the header (no page overflow) and stand still under prefers-reduced-motion. The theme sets header padding-bottom to 5.5rem on desktop (base is 3.5rem, so +32px) and 5.25rem on phones (≤600px) for the turkey lane; removing the theme restores the normal header height.

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
