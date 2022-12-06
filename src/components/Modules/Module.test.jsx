import { render } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";

import ModulePage from "./Module_page";

describe("Module interactions", () => {
  beforeEach(() => {
    render(<ModulePage />);
  });

  it("renders modules page", () => {
    expect(screen.findByText(/Missing something?/i));
  });

  it("opens a modal component", async () => {
    const addModulesButton = screen.getByText(/Add modules/i);
    await userEvent.click(addModulesButton);
    expect(screen.findByPlaceholderText(/Search by name/i));
  });
});
