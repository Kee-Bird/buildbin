# Holiday categories: Christmas Builds + Kids Thanksgiving

Added Nov 2026. Two categories in `data/projects.json`:

| key | label | page | projects |
|-----|-------|------|----------|
| `christmas` | Christmas Builds | `category/christmas.html` | #p-96 to #p-107 |
| `thanksgiving` | Kids Thanksgiving | `category/thanksgiving.html` | #p-108 to #p-114 |

The projects go at the end of the list, so the `#p-N` anchors for earlier projects stay the same. The category pages, the JSON categories, the `app.js` ICON entries (🎄 / 🦃) and the `sitemap.xml` entries stay all year, like Halloween. Only the nav links are seasonal.

## Seasonal nav links (index.html only, right after the Meshtastic link)

```html
<!-- SEASONAL NAV (Thanksgiving): remove after Nov 30 --><a href="category/thanksgiving.html">Kids Thanksgiving</a>
<!-- SEASONAL NAV (Christmas): remove after Jan 6 --><a href="category/christmas.html">Christmas builds</a>
```

- **Thanksgiving link:** delete it after Nov 30. Put it back around Nov 1 next year.
- **Christmas link:** delete it after Jan 6. Put it back around Nov 1 next year.

## Pinterest

- Pins: `assets/pins/96.jpg` to `assets/pins/114.jpg` (1000x1500).
- Boards: "Christmas Builds" and "Kids Thanksgiving Projects".

## Images

All thumbnails are BuildBin illustrations (`thumb_illustrated: true`), so `credits.html` does not need any changes.
