import { render, screen, waitFor } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";

import ModulePage from "./Module_page";

describe("Module interactions", () => {
  beforeEach(() => {
    render(<ModulePage />);
  });

  it("renders modules page", async () => {
    await waitFor(() => {
      expect(screen.getByText(/Missing something?/i));
      expect(screen.getByText(/Composition/i));
      expect(screen.getByText(/Add modules/i));
    });
  });

  it("opens a modal component", async () => {
    const addModulesButton = screen.getByText(/Add modules/i);
    await userEvent.click(addModulesButton);
    expect(screen.findByPlaceholderText(/Search by name/i));
  });
});
