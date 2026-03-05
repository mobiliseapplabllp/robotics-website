import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Solutions } from "./pages/Solutions";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

// Individual Product Pages
import { T10Page } from "./pages/products/T10Page";
import { T11Page } from "./pages/products/T11Page";
import { T8Page } from "./pages/products/T8Page";
import { T3Page } from "./pages/products/T3Page";
import { T9Page } from "./pages/products/T9Page";
import { T9ProPage } from "./pages/products/T9ProPage";
import { W3Page } from "./pages/products/W3Page";
import { C20Page } from "./pages/products/C20Page";
import { G1Page } from "./pages/products/G1Page";
import { C40Page } from "./pages/products/C40Page";
import { S100Page } from "./pages/products/S100Page";
import { S300Page } from "./pages/products/S300Page";
import { T5Page } from "./pages/products/T5Page";
import { C30Page } from "./pages/products/C30Page";
import { C55Page } from "./pages/products/C55Page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },

      // Individual Product Routes
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

      // Fallback for any other product IDs
      { path: "products/:id", Component: ProductDetail },

      { path: "solutions", Component: Solutions },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);