import { render, screen } from "./utils/test-utils";
import { CheckAuth } from "./components/Authentication/Login";

describe("App first paint", () => {
  it.todo("check login redirect");

  it("shows only navbar", () => {
    render(<CheckAuth />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/The Semester Planner/i)).toBeInTheDocument();
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});
