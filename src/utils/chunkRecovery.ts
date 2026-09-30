// Recovery for script chunks that fail to load, usually because a deploy
// replaced them while a tab still pointed at the old hashes. Reloading fetches
// a fresh index.html with the new hashes.
//
// A reload is attempted at most once per RETRY_WINDOW_MS per tab. That still
// recovers from back-to-back deploys, but a genuinely broken deploy cannot put
// the tab into a tight reload loop: after one attempt the error surfaces.

const RELOAD_KEY = "chunk-reload-attempted-at";
const RETRY_WINDOW_MS = 30_000;

let reloading = false;

/** Reload to recover. Returns true if a reload is now under way. */
export function recoverFromStaleChunk(reason: string): boolean {
  if (reloading) return true;
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
    if (Date.now() - last < RETRY_WINDOW_MS) {
      console.error("Chunk load failed again right after a reload — not retrying.", reason);
      return false;
    }
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    /* storage unavailable (private mode) — reload once anyway */
  }
  reloading = true;
  window.location.reload();
  return true;
}

export function isReloading(): boolean {
  return reloading;
}

/** A promise that never settles: keeps React suspended while the page reloads. */
export function untilReload<T>(): Promise<T> {
  return new Promise<T>(() => {});
}

const CHUNK_ERROR = /dynamically imported module|Importing a module script failed|error loading dynamically imported|Unable to preload/i;

export function isChunkLoadError(err: unknown): boolean {
  const message = String((err as { message?: unknown })?.message ?? err ?? "");
  return CHUNK_ERROR.test(message);
}
