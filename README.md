# BuildBin (working name) v1
Static site. Edit data/projects.json to add projects. Run `python3 build.py` only to regenerate the seed data (it overwrites the JSON file).
Replace https://buildbin.dev/ in the HTML, sitemap.xml, and robots.txt once you have a domain.
Run locally: python3 -m http.server 8080

## Affiliate links (daily-ops convention)
Every part in data/projects.json is an object `{"name": "...", "url": "..."}`. The url is an Amazon **search** link (never a made-up ASIN):
`https://www.amazon.com/s?k=<url-encoded part name, parenthetical text removed>&tag=buildbin-20`
When you add projects, use this same format. If a part is still a plain string, app.js builds the same tagged search link automatically.
Keep the disclosure "As an Amazon Associate, BuildBin earns from qualifying purchases." in every page footer and under parts lists.
Note: the Associates account is under review and needs qualifying sales within 180 days.
