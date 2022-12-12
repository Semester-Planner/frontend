import { render, waitFor, screen } from "../../utils/test-utils";
import userEvent from "@testing-library/user-event";
import "whatwg-fetch";

import SearchModal from "./Module_new";

describe("Interacting with search and query", () => {
  beforeEach(() => {
    render(<SearchModal show={true} />);
  });

  it("shows 5 first search results only", async () => {
    await waitFor(() => {
      expect(screen.getByText(/Composition/i)).toBeInTheDocument();
      expect(screen.queryByText("Intercultural Understanding")).toBeNull(); // 6th module in the response list
    });

    const results = screen.getAllByRole("button"); // all modules render as buttons
    expect(results.length).toBe(6); // 5 modules + 1 close button
  });

  it("searches for valid results", async () => {
    const searchInput = screen.getByPlaceholderText(/Search by name/i);
    await userEvent.type(searchInput, "Composition");

    await waitFor(() => {
      expect(screen.getByText(/Composition/i)).toBeInTheDocument();
      const results = screen.getAllByRole("button");
      expect(results.length).toBe(2); // close button + 1 module
    });
  });

  it.todo("show error message if search fails");
  it("searches for invalid results", async () => {
    const searchInput = screen.getByPlaceholderText(/Search by name/i);
    await userEvent.type(searchInput, "Badass module");

    await waitFor(() => {
      const results = screen.getAllByRole("button");
      expect(results.length).toBe(1); // only close button
    });
  });

  it.todo("add popup to confirm adding module");
  it.todo("close modal when module added");
  it("adds module to user modules", async () => {
    await screen.findByText(/Composition/i);
    const newModule = screen.getByText(/Composition/i);
    await userEvent.click(newModule);

    await waitFor(() => {
      expect(newModule).toBeInTheDocument(); //signifies that the module has been added to the user's modules
    });
  });
});
