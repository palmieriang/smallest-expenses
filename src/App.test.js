import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { fetchExpenses } from "./utils/api";
import * as user from "./fixtures/transactions.json";

jest.mock("./utils/api");

describe("App", () => {
  beforeEach(() => {
    fetchExpenses.mockClear();
  });

  it("should show loading state while fetching expenses", async () => {
    fetchExpenses.mockResolvedValueOnce(user);

    const { getByText } = render(<App />);

    await waitFor(() => expect(getByText(/loading/i)).toBeInTheDocument());
  });

  it("should fetch and display the expenses", async () => {
    fetchExpenses.mockResolvedValueOnce(user);

    const { getByText } = render(<App />);

    await waitFor(() => expect(getByText(/monzo/i)).toBeInTheDocument());
  });

  it("should only show 10 expenses", async () => {
    fetchExpenses.mockResolvedValueOnce(user);

    const { getAllByTestId } = render(<App />);

    await waitFor(() =>
      expect(getAllByTestId("transaction-description")).toHaveLength(10)
    );
  });

  it("fetchExpenses should have been called once", async () => {
    fetchExpenses.mockResolvedValueOnce(user);

    render(<App />);

    await waitFor(() => expect(fetchExpenses).toHaveBeenCalledTimes(1));
  });
});
