import { render, screen } from "./utils/test-utils";
import App from "./App";

describe("App first paint", () => {
  it.todo("check login redirect");

  it("shows only navbar", () => {
    render(<App />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/The Semester Planner/i)).toBeInTheDocument();
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
