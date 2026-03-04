import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { T9Page } from "./pages/T9Page";
import { Solutions } from "./pages/Solutions";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "products/t9", Component: T9Page },
      { path: "products/:id", Component: ProductDetail },
      { path: "solutions", Component: Solutions },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);