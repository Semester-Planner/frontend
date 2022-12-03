import { render, screen, waitFor } from "../../utils/test-utils";
import ModulePage from "./Module_page";
import "whatwg-fetch";

describe("Modules page", () => {
  it("renders modules page", async () => {
    await render(<ModulePage />);
    await waitFor(() =>
      expect(screen.getByText(/Missing something?/i)).toBeInTheDocument()
    );
  });
});
