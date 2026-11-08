# Fayzobod ko'chasi — jonli 3D

Live 3D simulation of Fayzobod street. https://fayzobod.beckzodiy.com

- **One shared world:** the simulation runs on real Tashkent time (UTC+5) with a seeded,
  deterministic step (5 Hz). Every visitor rebuilds today's events from midnight and then
  follows the same clock (`/api/time`), so everyone sees the same people in the same places.
- **Every person's POV:** people at home (or visiting) sit around the dastarxon inside their house's living room, with the rest of the household shown.
   👁 POV button, "👁 Ko'zi bilan" in a person's ID card, or the people
  list. `[` / `]` switch person, `Esc` exits. Links: `#pov-p005`, `#cam-02`, `#rasm`.

Deploy: `npx wrangler pages deploy` (static files in `public/`, time endpoint in `functions/`).
