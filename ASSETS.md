# Profile artwork

`README.md` is the GitHub profile. `assets/polycentric-orchestra.svg` is its main illustration; the other SVGs are preserved earlier assets.

The orchestra retains its original vector artwork in `scripts/orchestra-template.svg`. `assets/orchestra-score.json` defines an illustrative nine-stage cycle. Every signal shares one 27-second clock, with three seconds per stage. Dissent visibly returns to the proposal before revision and fresh evidence return to human decision.

Regenerate with Node.js:

```sh
node scripts/render-orchestra.mjs
```

With the related repositories checked out as siblings, update both copies:

```sh
node scripts/render-orchestra.mjs --sync-site ../tomfoolery
```

The template also supplies the static map for the interactive site. The site highlights the edge corresponding to its actual state transition. Its separate teaching model permits dissent and failure to branch the sequence; the profile SVG is a scored illustration, not live telemetry.

The SVG uses declarative animation without scripts, external fonts, or remote assets. A reduced-motion media query hides animated signals and displays the complete cycle as a static caption. Its title and description provide a text alternative. GitHub may render or cache the image differently from a local browser; check the published profile after release.

Publish the related tomfoolery pages before the profile README, which links to the new interactive page and repaired rooms.
