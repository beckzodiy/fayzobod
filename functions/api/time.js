// Shared clock for all viewers: every browser aligns its simulation to this time.
export function onRequest() {
  return new Response(JSON.stringify({ t: Date.now() }), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });
}
