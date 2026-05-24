import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Solutions } from "./pages/Solutions";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

// Rarely-visited pages → code-split
const Privacy = lazy(() => import("./pages/Privacy").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("./pages/Terms").then((m) => ({ default: m.Terms })));
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

// Blog — code-split (markdown content is a decent-sized chunk)
const Blog = lazy(() => import("./pages/Blog").then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import("./pages/BlogPost").then((m) => ({ default: m.BlogPost })));

// Per-industry solution landing pages — code-split (each loads industry data)
const SolutionDetailPage = lazy(() =>
  import("./pages/SolutionDetailPage").then((m) => ({ default: m.SolutionDetailPage })),
);

// Single per-product detail template — replaces 15 individual product pages.
// Driven by `src/content/products/detail.ts` + `src/app/data/products.ts`.
const ProductDetailPage = lazy(() =>
  import("./pages/ProductDetailPage").then((m) => ({ default: m.ProductDetailPage })),
);

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },

      // Single dynamic route for all 15 KEENON product detail pages
      { path: "products/:slug", Component: ProductDetailPage },

      { path: "solutions", Component: Solutions },
      { path: "solutions/:slug", Component: SolutionDetailPage },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },

      // 404 catch-all — must be last
      { path: "*", Component: NotFound },
    ],
  },
]);
