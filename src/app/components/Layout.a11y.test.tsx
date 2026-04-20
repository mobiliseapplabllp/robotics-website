import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import { Layout } from "./Layout";

function renderLayout() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<div>Home</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

describe("Layout — accessibility", () => {
  it("exposes a skip-to-main-content link", () => {
    renderLayout();
    expect(
      screen.getByRole("link", { name: /skip to main content/i })
    ).toHaveAttribute("href", "#main-content");
  });

  it("marks the main landmark with id=main-content so the skip link has a target", () => {
    renderLayout();
    const main = screen.getByRole("main");
    expect(main).toHaveAttribute("id", "main-content");
  });

  it("renders the footer social icons as non-interactive placeholders (no dead href=# links)", () => {
    const { container } = renderLayout();
    // Announces the list as "coming soon" so screen-reader users know social is not live yet
    const list = screen.getByRole("list", { name: /social media \(coming soon\)/i });
    // No <a href="#"> dead links anywhere on the page
    const anchors = container.querySelectorAll('a[href="#"]');
    expect(anchors.length).toBe(0);
    // Each slot is announced as an image with a "coming soon" label — not a link
    const placeholders = within(list).getAllByRole("img");
    expect(placeholders).toHaveLength(4);
    for (const ph of placeholders) {
      expect(ph.getAttribute("aria-label") ?? "").toMatch(/coming soon/i);
    }
  });

  it("gives the mobile menu button an accessible name and aria-expanded state", () => {
    renderLayout();
    const btn = screen.getByRole("button", { name: /open menu/i });
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(btn).toHaveAttribute("aria-controls", "mobile-menu");
  });
});
