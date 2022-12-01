import { render, screen, waitFor } from "./utils/test-utils";
import { CheckAuth } from "./components/Authentication/Login";
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

  it("redirects to login if user is unauthorized", async () => {
    await render(<CheckAuth />); // MSW returns 403
    await expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    await waitFor(() => expect(window.location.href).toBe("/login"));
  });
});
