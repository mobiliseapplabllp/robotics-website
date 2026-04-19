interface MonogramAvatarProps {
  name: string;
  className?: string;
}

/**
 * Branded circular avatar showing the initials of the provided name.
 * Used as an honest placeholder when a real photograph is not available,
 * instead of stock photography misrepresenting a specific person.
 */
export function MonogramAvatar({ name, className }: MonogramAvatarProps) {
  const initials = getInitials(name);
  const { from, to } = getGradientForName(name);

  return (
    <div
      className={`relative flex items-center justify-center bg-gradient-to-br ${from} ${to} ${className ?? ""}`}
      aria-hidden="true"
    >
      <span className="text-white font-black tracking-tight select-none" style={{ fontSize: "30%" }}>
        {initials}
      </span>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_60%)]" />
    </div>
  );
}

function getInitials(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) return "?";
  const parts = trimmed.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Deterministic gradient choice from a small branded palette.
const GRADIENTS: Array<{ from: string; to: string }> = [
  { from: "from-cyan-500", to: "to-blue-700" },
  { from: "from-emerald-500", to: "to-teal-700" },
  { from: "from-amber-500", to: "to-orange-700" },
  { from: "from-violet-500", to: "to-indigo-700" },
  { from: "from-rose-500", to: "to-pink-700" },
  { from: "from-sky-500", to: "to-indigo-700" },
];

function getGradientForName(name: string) {
  // Simple sum-of-char-codes hash — stable, fast, good enough for 6 buckets.
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return GRADIENTS[sum % GRADIENTS.length];
}
