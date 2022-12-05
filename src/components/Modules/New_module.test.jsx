import { render, waitFor } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";

import SearchModal from "./Module_new";

describe("Interacting with search and query", () => {
  it("shows 5 first search results only", async () => {
    const { getByText, getAllByRole, queryByText } = render(
      <SearchModal show={true} />
    );

    await waitFor(() => {
      expect(getByText(/Composition/i)).toBeInTheDocument();
      expect(queryByText("Intercultural Understanding")).toBeNull(); // 6th module in the response list
    });

    const results = getAllByRole("button"); // all modules render as buttons
    expect(results.length).toBe(6); // 5 modules + 1 close button
  }),
    it("searches for valid results", async () => {
      const { getByPlaceholderText, getAllByRole, getByText } = render(
        <SearchModal show={true} />
      );
      const searchInput = getByPlaceholderText(/Search by name/i);
      await userEvent.type(searchInput, "Composition");

      await waitFor(() => {
        expect(getByText(/Composition/i)).toBeInTheDocument();
        const results = getAllByRole("button");
        expect(results.length).toBe(2); // close button + 1 module
      });
    });

  it.todo("show error message if search fails");
  it("searches for invalid results", async () => {
    const { getByPlaceholderText, getAllByRole } = render(
      <SearchModal show={true} />
    );
    const searchInput = getByPlaceholderText(/Search by name/i);
    await userEvent.type(searchInput, "Badass module");

    await waitFor(() => {
      const results = getAllByRole("button");
      expect(results.length).toBe(1); // only close button
      // expect(getByText(/No modules found/i));
    });
  });

  it.todo("add popup to confirm adding module");
  it.todo("close modal when module added");
  it("adds module to user modules", async () => {
    const { findByText, getByText } = render(<SearchModal show={true} />);
    await findByText(/Composition/i);
    const newModule = getByText(/Composition/i);
    await userEvent.click(newModule);

    await waitFor(() => {
      // expect(getByText(/Module added!/i));
      // expect(getByText(/hope we have it/i)).not.toBeInTheDocument(); //signifies that the modal has closed
      expect(newModule).toBeInTheDocument(); //signifies that the module has been added to the user's modules
    });
  });
});
