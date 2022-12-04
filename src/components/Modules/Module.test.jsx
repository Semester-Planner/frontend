import { fireEvent, render, screen, waitFor } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";

import ModulePage from "./Module_page";
import { SearchModal } from "./Module_new";

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
    }),
    it("shows 5 first search results", async () => {
      const { getByText } = render(<SearchModal show={true} />);

      await waitFor(() => {
        expect(getByText(/Composition/i));
        expect(getByText(/Teamwork and/i));
        expect(getByText(/Leadership/i));
        expect(getByText(/Creative Problem/i));
        expect(getByText(/Self-Directed/i));
      });

      const results = screen.getAllByRole("button"); // all modules render as buttons
      expect(results.length).toBe(6); // 5 modules + 1 close button
    });
});
