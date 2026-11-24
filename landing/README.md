# Gerek landing page

A static, bilingual (BM/EN) landing page. It has no build step and no dependencies, and every path is relative, so it runs on GitHub Pages as-is. You can also open `index.html` straight from your computer.

```
landing/
  index.html          page structure (no need to edit)
  config.js           ALL editable content: edit this one
  assets/css/style.css
  assets/js/main.js   reads config.js and fills the page
  assets/brand/       trimmed logo PNGs (copied from packages/core/assets/brand)
  .nojekyll           tells GitHub Pages to serve files as they are
```

## Editing content

Everything you'd want to change is in **`config.js`**. Open it in any text editor, change the text, save, and refresh the page.

All text is written as a pair: `{ bm: "…", en: "…" }`. If one side is empty, the page shows the other language instead.

| To… | Do this in `config.js` |
|---|---|
| **Open a survey** | Paste the form link into that survey's `url: ""`. The "Akan datang / Coming soon" badge becomes an "Open survey" button. |
| Add or remove a survey card | Copy or delete a `{ … }` block in `surveys`. |
| **Put in real survey numbers** | Edit `stats.items` (`count`, `total`, `label`), then set `stats.sample: false` to remove the "Sample figures" notice. |
| Fill in the team | Edit `team`. For a photo, put a square image in `assets/team/` and set `photo: "assets/team/name.jpg"`. Leave `linkedin: ""` to hide the link. |
| Hide the team section | Set `team: []`. |
| Change the default language | Set `defaultLang` to `"bm"` or `"en"`. |
| Change any other wording | Find it under `copy`. Sections appear in page order. |

Rules that keep it working: keep the quotes around text and the comma after each line. Links must start with `https://`, and anything else is ignored on purpose. If the page goes blank after an edit, there's a typo in `config.js`. Press F12 and the Console names the line.

> **Before sharing publicly:** the four stats currently on the page are **sample numbers**, not survey results. Replace them, use aggregates only (never names or emails), and set `sample: false`.

To share a link in a particular language, add `?lang=en` or `?lang=bm` to the URL.

## Deploying to GitHub Pages

**Option A: a dedicated repo (simplest)**

1. Create a new public repository on GitHub, for example `gerek-site`.
2. Upload the *contents* of this `landing/` folder to the repo root, including the hidden `.nojekyll` file: **Add file → Upload files**, or use `git push`.
3. Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main**, and folder to **/ (root)**. Save.
4. After a minute the site is live at `https://<your-username>.github.io/gerek-site/`.

**Option B: inside an existing repo**

Put the folder at `docs/` in the repo. In **Settings → Pages**, choose branch `main` and folder **/docs**.

**Updating later:** edit `config.js`, commit or upload it again, and GitHub redeploys automatically within about a minute. Hard-refresh (Ctrl+Shift+R) if you still see the old version.

**Custom domain (optional):** in **Settings → Pages → Custom domain**, enter e.g. `gerek.my`, then add the DNS records GitHub shows you at your domain registrar.

## Design notes

- Colours come from `packages/core/lib/src/design/tokens.dart`. UI blue `#1591DC` and its ramp drive the interface. The logo blue `#0B60FD` appears only inside the logo PNGs.
- White text on `#1591DC` reaches only 3.4:1, which passes WCAG AA for large text but not body text. So white text on the brand blue is limited to the large slogan. Buttons and links use the darker `#1179B8` (4.7:1).
- Fonts are Lexend Exa for headings and Lexend for body text, loaded from Google Fonts. If the fonts fail to load, the page falls back to system fonts and still works.
- Dark mode follows the visitor's system setting. The moon button next to BM/EN overrides it, and the browser remembers the choice. Dark colours are the semantic variables (`--bg`, `--card`, `--accent`…) at the top of `style.css`. To change a dark colour, edit that block, not individual rules.
- The hero's alert animation runs once and is skipped for visitors with "reduce motion" turned on.
