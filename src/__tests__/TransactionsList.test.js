import React from "react";
import { render } from "@testing-library/react";
import TransactionsList from "../TransactionsList";

const transactions = [
  {
    id: "13acb877dc4d8030c5dacbde33d3496a2ae3asdc000db4c793bda9c3228baca1a28",
    date: "2018-06-30",
    description: "Vodafone",
    category_title: "Groceries",
    amount: {
      value: -57.21,
      currency_iso: "GBP",
    },
  },
];

describe("TransactionsList", () => {
  it("should show transactions details", () => {
    const { getByText } = render(
      <TransactionsList transactions={transactions} />
    );

    expect(getByText(/vodafone/i)).toBeInTheDocument();
    expect(getByText(/groceries/i)).toBeInTheDocument();
  });
});
