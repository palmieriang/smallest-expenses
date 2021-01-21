import React from "react";
import { render } from "@testing-library/react";
import TransactionsList from "./index";
import * as user from "../../fixtures/transactions.json";

describe("TransactionsList", () => {
  it("should show transactions details", () => {
    const { getAllByText } = render(
      <TransactionsList transactions={user.transactions} />
    );

    expect(
      getAllByText(`${user.transactions[0].description}`)[0]
    ).toBeInTheDocument();
    expect(
      getAllByText(`${user.transactions[0].category_title}`)[0]
    ).toBeInTheDocument();
    expect(getAllByText(/57.21/)[0]).toBeInTheDocument();
    expect(getAllByText(`${user.transactions[0].date}`)[0]).toBeInTheDocument();
    expect(getAllByText(/gbp/i)[0]).toBeInTheDocument();
  });
});
