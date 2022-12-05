import { render } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";

import ModulePage from "./Module_page";

describe("Module interactions", () => {
  it("renders modules page", () => {
    const { findByText } = render(<ModulePage />);
    expect(findByText(/Missing something?/i));
  }),
    it("opens a modal component", async () => {
      const { getByText, findByPlaceholderText } = render(<ModulePage />);
      const addModulesButton = getByText(/Add modules/i);
      await userEvent.click(addModulesButton);
      expect(findByPlaceholderText(/Search by name/i));
    });
});
