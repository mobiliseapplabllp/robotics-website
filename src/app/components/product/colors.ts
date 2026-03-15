/**
 * Static color mapping for product page accent colors.
 *
 * Tailwind CSS scans source files statically and cannot resolve
 * dynamically constructed class names like `text-${color}-500`.
 * This mapping ensures all classes are written in full so Tailwind
 * can detect and include them in the build.
 */

export type AccentColor =
    | "blue" | "orange" | "cyan" | "teal" | "rose" | "slate"
    | "amber" | "yellow" | "purple" | "green" | "lime"
    | "emerald" | "fuchsia" | "pink" | "indigo" | "sky";

interface ColorClasses {
    text500: string;
    text400: string;
    bg500: string;
    bgGlow: string;
    bgLine: string;
    gradientFrom: string;
    border500: string;
    accent950bg: string;
}

const COLOR_MAP: Record<AccentColor, ColorClasses> = {
    blue: {
        text500: "text-blue-500",
        text400: "text-blue-400",
        bg500: "bg-blue-500",
        bgGlow: "bg-blue-500/5",
        bgLine: "from-blue-500/50",
        gradientFrom: "from-blue-500",
        border500: "border-blue-500",
        accent950bg: "from-blue-950/20",
    },
    orange: {
        text500: "text-orange-500",
        text400: "text-orange-400",
        bg500: "bg-orange-500",
        bgGlow: "bg-orange-500/5",
        bgLine: "from-orange-500/50",
        gradientFrom: "from-orange-500",
        border500: "border-orange-500",
        accent950bg: "from-orange-950/20",
    },
    cyan: {
        text500: "text-cyan-500",
        text400: "text-cyan-400",
        bg500: "bg-cyan-500",
        bgGlow: "bg-cyan-500/5",
        bgLine: "from-cyan-500/50",
        gradientFrom: "from-cyan-500",
        border500: "border-cyan-500",
        accent950bg: "from-cyan-950/20",
    },
    teal: {
        text500: "text-teal-500",
        text400: "text-teal-400",
        bg500: "bg-teal-500",
        bgGlow: "bg-teal-500/5",
        bgLine: "from-teal-500/50",
        gradientFrom: "from-teal-500",
        border500: "border-teal-500",
        accent950bg: "from-teal-950/20",
    },
    rose: {
        text500: "text-rose-500",
        text400: "text-rose-400",
        bg500: "bg-rose-500",
        bgGlow: "bg-rose-500/5",
        bgLine: "from-rose-500/50",
        gradientFrom: "from-rose-500",
        border500: "border-rose-500",
        accent950bg: "from-rose-950/20",
    },
    slate: {
        text500: "text-slate-500",
        text400: "text-slate-400",
        bg500: "bg-slate-500",
        bgGlow: "bg-slate-500/5",
        bgLine: "from-slate-500/50",
        gradientFrom: "from-slate-500",
        border500: "border-slate-500",
        accent950bg: "from-slate-950/20",
    },
    amber: {
        text500: "text-amber-500",
        text400: "text-amber-400",
        bg500: "bg-amber-500",
        bgGlow: "bg-amber-500/5",
        bgLine: "from-amber-500/50",
        gradientFrom: "from-amber-500",
        border500: "border-amber-500",
        accent950bg: "from-amber-950/20",
    },
    yellow: {
        text500: "text-yellow-500",
        text400: "text-yellow-400",
        bg500: "bg-yellow-500",
        bgGlow: "bg-yellow-500/5",
        bgLine: "from-yellow-500/50",
        gradientFrom: "from-yellow-500",
        border500: "border-yellow-500",
        accent950bg: "from-yellow-950/20",
    },
    purple: {
        text500: "text-purple-500",
        text400: "text-purple-400",
        bg500: "bg-purple-500",
        bgGlow: "bg-purple-500/5",
        bgLine: "from-purple-500/50",
        gradientFrom: "from-purple-500",
        border500: "border-purple-500",
        accent950bg: "from-purple-950/20",
    },
    green: {
        text500: "text-green-500",
        text400: "text-green-400",
        bg500: "bg-green-500",
        bgGlow: "bg-green-500/5",
        bgLine: "from-green-500/50",
        gradientFrom: "from-green-500",
        border500: "border-green-500",
        accent950bg: "from-green-950/20",
    },
    lime: {
        text500: "text-lime-500",
        text400: "text-lime-400",
        bg500: "bg-lime-500",
        bgGlow: "bg-lime-500/5",
        bgLine: "from-lime-500/50",
        gradientFrom: "from-lime-500",
        border500: "border-lime-500",
        accent950bg: "from-lime-950/20",
    },
    emerald: {
        text500: "text-emerald-500",
        text400: "text-emerald-400",
        bg500: "bg-emerald-500",
        bgGlow: "bg-emerald-500/5",
        bgLine: "from-emerald-500/50",
        gradientFrom: "from-emerald-500",
        border500: "border-emerald-500",
        accent950bg: "from-emerald-950/20",
    },
    fuchsia: {
        text500: "text-fuchsia-500",
        text400: "text-fuchsia-400",
        bg500: "bg-fuchsia-500",
        bgGlow: "bg-fuchsia-500/5",
        bgLine: "from-fuchsia-500/50",
        gradientFrom: "from-fuchsia-500",
        border500: "border-fuchsia-500",
        accent950bg: "from-fuchsia-950/20",
    },
    pink: {
        text500: "text-pink-500",
        text400: "text-pink-400",
        bg500: "bg-pink-500",
        bgGlow: "bg-pink-500/5",
        bgLine: "from-pink-500/50",
        gradientFrom: "from-pink-500",
        border500: "border-pink-500",
        accent950bg: "from-pink-950/20",
    },
    indigo: {
        text500: "text-indigo-500",
        text400: "text-indigo-400",
        bg500: "bg-indigo-500",
        bgGlow: "bg-indigo-500/5",
        bgLine: "from-indigo-500/50",
        gradientFrom: "from-indigo-500",
        border500: "border-indigo-500",
        accent950bg: "from-indigo-950/20",
    },
    sky: {
        text500: "text-sky-500",
        text400: "text-sky-400",
        bg500: "bg-sky-500",
        bgGlow: "bg-sky-500/5",
        bgLine: "from-sky-500/50",
        gradientFrom: "from-sky-500",
        border500: "border-sky-500",
        accent950bg: "from-sky-950/20",
    },
};

export function getAccentClasses(color: AccentColor): ColorClasses {
    return COLOR_MAP[color];
}
