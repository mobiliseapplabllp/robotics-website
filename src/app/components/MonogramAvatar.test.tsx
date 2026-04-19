import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MonogramAvatar } from "./MonogramAvatar";

describe("MonogramAvatar", () => {
  it("renders initials of a two-word name", () => {
    render(<MonogramAvatar name="Arjun Mehta" />);
    expect(screen.getByText("AM")).toBeInTheDocument();
  });

  it("renders first two letters when name is a single word", () => {
    render(<MonogramAvatar name="Priya" />);
    expect(screen.getByText("PR")).toBeInTheDocument();
  });

  it("handles empty name without crashing", () => {
    render(<MonogramAvatar name="" />);
    expect(screen.getByText("?")).toBeInTheDocument();
  });

  it("is hidden from assistive tech (decorative, not informative)", () => {
    const { container } = render(<MonogramAvatar name="Test User" />);
    // The outer div carries aria-hidden, so it should not appear in the accessibility tree
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
  });
});
