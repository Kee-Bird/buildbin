# Halloween theme (approved by Josh, Oct 2026)

Live every year Oct 1 through Oct 31; removed Nov 1.

Install:
1. Copy halloween.css and halloween.js into assets/.
2. On every HTML page (index.html, category/*.html, sponsor.html, credits.html, sponsor-thanks.html, ...), add the two lines marked `HALLOWEEN THEME`:
   - right after the style.css <link>: `<link rel="stylesheet" href="/assets/halloween.css"> <!-- HALLOWEEN THEME -->`
   - right before </body>: `<script src="/assets/halloween.js" defer></script> <!-- HALLOWEEN THEME -->`
   (Match the exact form already used; see git tag halloween-theme-2026.)
3. The "Spooky season builds" bar in halloween.js links project anchors (#p-28, #p-21, #p-3, #p-8); confirm those ids still exist.

Remove: delete the HALLOWEEN THEME lines from every page and delete assets/halloween.css and assets/halloween.js.
