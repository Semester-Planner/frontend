import { render, screen, waitFor } from "./utils/test-utils";
import { CheckAuth } from "./components/Authentication/Login";

//mocking backend interaction
import { server } from "./mocks/server";
import { rest } from "msw";
import "whatwg-fetch";

describe("App first paint", () => {
  beforeAll(() => {
    global.window = Object.create(window);
    const url = "http://localhost";
    Object.defineProperty(window, "location", {
      value: {
        href: url,
      },
      writable: true,
    });
  });

  it("renders app if user is authorized", async () => {
    await render(<CheckAuth />);
    await waitFor(() => expect(window.location.href).toBe("http://localhost"));
    await waitFor(() =>
      expect(screen.getByText(/The Semester Planner/i)).toBeInTheDocument()
    );
  });

  it("redirects to login if user is unauthorized", async () => {
    server.use(
      rest.get("http://localhost/auth/session", (req, res, ctx) => {
        return res(ctx.status(403));
      })
    );

    await render(<CheckAuth />);
    await expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    await waitFor(() => expect(window.location.href).toBe("/login"));
  });
});
