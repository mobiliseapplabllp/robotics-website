/**
 * Route-level loading fallback. Rendered inside <Suspense> while a
 * code-split page chunk is being fetched. Deliberately minimal —
 * most users on a reasonable connection will never see this.
 */
export function PageLoader() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:150ms]" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse [animation-delay:300ms]" aria-hidden="true" />
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
