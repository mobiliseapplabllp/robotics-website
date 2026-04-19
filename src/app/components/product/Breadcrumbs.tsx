import { Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Accessible breadcrumb navigation. The last item is always the current page
 * (no href). Renders as an ordered list inside a <nav aria-label="Breadcrumb">.
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-6"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/60">
        <li className="flex items-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-white/60 hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
          >
            <Home className="w-3 h-3" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-white/30" aria-hidden="true" />
              {isLast || !item.href ? (
                <span
                  className="font-semibold text-white"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
