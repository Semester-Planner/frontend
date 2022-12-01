import { render, screen } from "../../utils/test-utils";

import Navigation from "./Navbar";

describe("Navbar components render", () => {
  beforeEach(() => {
    render(<Navigation />);
  });

  it("sees modules link", () => {
    const modulesLink = screen.getByRole("link", { name: /modules/i });
    expect(modulesLink).toHaveAttribute("href", "modules");
  });

  it("sees timeline link", () => {
    const timelineLink = screen.getByRole("link", { name: /timeline/i });
    expect(timelineLink).toHaveAttribute("href", "timeline");
  });

  it("sees logout button", () => {
    const logoutButton = screen.getByText(/log out/i);
    expect(logoutButton).toBeEnabled();
  });
});
