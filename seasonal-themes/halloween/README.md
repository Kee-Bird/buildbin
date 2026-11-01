# Halloween theme (approved by Josh, Oct 2026)

Live every year Oct 1 through Oct 31; removed Nov 1.

Install:
1. Copy halloween.css and halloween.js into assets/.
2. On every HTML page, re-add the two HALLOWEEN THEME snippets exactly as they appear in git tag `halloween-theme-2026` (e.g. `git show halloween-theme-2026:index.html`): a stylesheet link right after style.css wrapped in `<!-- HALLOWEEN THEME (seasonal): delete from here... -->` / `<!-- ...to here ... -->` comments, and `<!-- HALLOWEEN THEME (seasonal): delete this line to remove --><script defer src="assets/halloween.js"></script>` right before </body>. Paths are relative: `assets/...` on root pages, `../assets/...` on category/ pages.
3. The "Spooky season builds" bar in halloween.js links project anchors (#p-59, #p-61, #p-60, #p-28) plus an "All Halloween builds →" pill to category/halloween.html; confirm those ids still exist.

Remove: delete the HALLOWEEN THEME lines from every page and delete assets/halloween.css and assets/halloween.js.

Halloween category: category/halloween.html (and its sitemap entry and the `halloween` category in data/projects.json) stays in the repo year-round, but it is NOT in the permanent category nav. It is only linked from the theme bar's "All Halloween builds →" pill, so it is reachable only while the theme is installed (Oct 1–31). Removing the theme on Nov 1 does not delete the page.

## Halloween builds nav link (hidden Nov 1, 2026 — restore on Oct 1)

Approved by Josh on Nov 1, 2026 ("hide the Halloween builds link until next October").
Removed from the permanent category nav in **index.html** only (no other page linked to it):

File: `index.html`, inside `<nav class="cats">`, between the Meshtastic and Kids projects links. Removed snippet (exact):

```html
<a href="category/halloween.html">Halloween builds</a>
```

Restore on Oct 1: put that snippet back right after `<a href="category/meshtastic.html">Meshtastic</a>` and before `<a href="category/kids.html">Kids projects</a>`, e.g.

```bash
python3 - <<'PY'
p='index.html'; s=open(p).read()
a='<a href="category/meshtastic.html">Meshtastic</a>'
s=s.replace(a, a+'<a href="category/halloween.html">Halloween builds</a>',1); open(p,'w').write(s)
PY
```

Remove it again on Nov 1. Not changed (left as-is year-round): category/halloween.html itself, its sitemap entry, the `halloween` category in data/projects.json, the 🎃 icon in app.js, and the words "Halloween builds" in index.html's meta/OG description text (not a link).
