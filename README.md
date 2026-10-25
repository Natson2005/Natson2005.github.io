# Release Board

A static site with live countdowns to upcoming action, fantasy, sci-fi and adventure movies and TV shows, plus what is in cinemas now. No build step, no dependencies.

## Files

| File | What it does |
| --- | --- |
| `index.html` | The page |
| `styles.css` | Look and layout (light and dark follow the visitor's system setting) |
| `movies.js` | The list of titles. This is the only file you edit to add or change releases |
| `app.js` | Countdowns, filters and search |

## Publish on GitHub Pages

1. Create a new repository on GitHub, for example `release-board`.
2. Upload all five files to the root of the repository (Add file, then Upload files), or push them with git.
3. Open Settings, then Pages. Under Build and deployment, set Source to "Deploy from a branch", choose the `main` branch and the `/ (root)` folder, then Save.
4. After a minute the site is live at `https://<your-username>.github.io/release-board/`.

## Add or change a title

Open `movies.js` and add a line to the `RELEASES` list:

```js
{ t: "Title", d: "2027-03-26", k: "movie", g: ["Action", "Sci-Fi"], by: "Studio and one short note." },
```

- `d` is the release date as `YYYY-MM-DD`. The countdown runs to 00:00 on that day in the visitor's time zone.
- `k` is `"movie"` or `"tv"`.
- `g` can hold any of `"Action"`, `"Fantasy"`, `"Sci-Fi"`, `"Adventure"`.
- Add `clash: "Other Title"` to flag two big releases opening the same day.
- Movies move from "Coming soon" to "In cinemas now" on their release date and stay there for 70 days (`IN_CINEMAS_DAYS` in `app.js`).
- Update `window.UPDATED` at the top of `movies.js` after you check dates.

Release dates change often. The data was last checked on 25 October 2026.
