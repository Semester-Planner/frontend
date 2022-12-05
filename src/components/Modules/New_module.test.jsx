import { render, waitFor } from "../../utils/test-utils";
import "whatwg-fetch";

import SearchModal from "./Module_new";

describe("Interacting with search and query", () => {
  it("shows 5 first search results", async () => {
    const { getByText, getAllByRole } = render(<SearchModal show={true} />);

    await waitFor(() => {
      expect(getByText(/Composition/i));
      expect(getByText(/Teamwork and/i));
      expect(getByText(/Leadership/i));
      expect(getByText(/Creative Problem/i));
      expect(getByText(/Self-Directed/i));
    });

    const results = getAllByRole("button"); // all modules render as buttons
    expect(results.length).toBe(6); // 5 modules + 1 close button
  });
});
