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

// Individual product pages — each is a separate chunk loaded on demand
const T10Page = lazy(() => import("./pages/products/T10Page").then((m) => ({ default: m.T10Page })));
const T11Page = lazy(() => import("./pages/products/T11Page").then((m) => ({ default: m.T11Page })));
const T8Page = lazy(() => import("./pages/products/T8Page").then((m) => ({ default: m.T8Page })));
const T3Page = lazy(() => import("./pages/products/T3Page").then((m) => ({ default: m.T3Page })));
const T9Page = lazy(() => import("./pages/products/T9Page").then((m) => ({ default: m.T9Page })));
const T9ProPage = lazy(() => import("./pages/products/T9ProPage").then((m) => ({ default: m.T9ProPage })));
const W3Page = lazy(() => import("./pages/products/W3Page").then((m) => ({ default: m.W3Page })));
const C20Page = lazy(() => import("./pages/products/C20Page").then((m) => ({ default: m.C20Page })));
const G1Page = lazy(() => import("./pages/products/G1Page").then((m) => ({ default: m.G1Page })));
const C40Page = lazy(() => import("./pages/products/C40Page").then((m) => ({ default: m.C40Page })));
const S100Page = lazy(() => import("./pages/products/S100Page").then((m) => ({ default: m.S100Page })));
const S300Page = lazy(() => import("./pages/products/S300Page").then((m) => ({ default: m.S300Page })));
const T5Page = lazy(() => import("./pages/products/T5Page").then((m) => ({ default: m.T5Page })));
const C30Page = lazy(() => import("./pages/products/C30Page").then((m) => ({ default: m.C30Page })));
const C55Page = lazy(() => import("./pages/products/C55Page").then((m) => ({ default: m.C55Page })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },

      // Individual Product Routes (lazy-loaded)
      { path: "products/t10", Component: T10Page },
      { path: "products/t11", Component: T11Page },
      { path: "products/t8", Component: T8Page },
      { path: "products/t3", Component: T3Page },
      { path: "products/t9", Component: T9Page },
      { path: "products/t9-pro", Component: T9ProPage },
      { path: "products/w3", Component: W3Page },
      { path: "products/c20", Component: C20Page },
      { path: "products/g1", Component: G1Page },
      { path: "products/c40", Component: C40Page },
      { path: "products/s100", Component: S100Page },
      { path: "products/s300", Component: S300Page },
      { path: "products/t5", Component: T5Page },
      { path: "products/c30", Component: C30Page },
      { path: "products/c55", Component: C55Page },

      { path: "solutions", Component: Solutions },
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
