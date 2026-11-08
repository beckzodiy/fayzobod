# Fayzobod ko'chasi — jonli 3D

Live 3D simulation of Fayzobod street. https://fayzobod.beckzodiy.com

- **One shared world:** the simulation runs on real Tashkent time (UTC+5) with a seeded,
  deterministic step (5 Hz). Every visitor rebuilds today's events from midnight and then
  follows the same clock (`/api/time`), so everyone sees the same people in the same places.
- **Every person's POV:** people at home (or visiting) sit around the dastarxon inside their house's living room, with the rest of the household shown.
  👁 POV button, "👁 Ko'zi bilan" in a person's ID card, or the people
  list. `[` / `]` switch person, `Esc` exits. Links: `#pov-p005`, `#cam-02`, `#rasm`, `#sayr`.
- **Walk the street yourself:** 🚶 Sayr button. `W`/`S` or `↑`/`↓` move, `A`/`D` strafe,
  `←`/`→` turn, `Shift` runs, drag to look. On phones use the on-screen arrows. Walls, houses and cars block you.

- **Surrounding village:** Fayzobod, Obod and Poytug' mahallas around the street, about 1.8 km across. Streets,
  mahalla boundaries, cemeteries, school No. 51 and the water tower come from OpenStreetMap
  (© OpenStreetMap contributors, ODbL); houses, yards and orchards are generated (the same every time). It is split
  into 160 m chunks that are hidden beyond ~560 m. (0,0) is CAM-01 at 40.907924, 72.199844.

Deploy: `npx wrangler pages deploy` (static files in `public/`, time endpoint in `functions/`).
