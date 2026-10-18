# Halloween theme (approved by Josh, Oct 2026)

Live every year Oct 1 through Oct 31; removed Nov 1.

Install:
1. Copy halloween.css and halloween.js into assets/.
2. On every HTML page, re-add the two HALLOWEEN THEME snippets exactly as they appear in git tag `halloween-theme-2026` (e.g. `git show halloween-theme-2026:index.html`): a stylesheet link right after style.css wrapped in `<!-- HALLOWEEN THEME (seasonal): delete from here... -->` / `<!-- ...to here ... -->` comments, and `<!-- HALLOWEEN THEME (seasonal): delete this line to remove --><script defer src="assets/halloween.js"></script>` right before </body>. Paths are relative: `assets/...` on root pages, `../assets/...` on category/ pages.
3. The "Spooky season builds" bar in halloween.js links project anchors (#p-28, #p-21, #p-3, #p-8); confirm those ids still exist.

Remove: delete the HALLOWEEN THEME lines from every page and delete assets/halloween.css and assets/halloween.js.
