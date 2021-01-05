import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

const provider = {
  title: "Monzo",
  account_number: "12345678",
  sort_code: "12-34-56",
  description: "Current Account",
};

const balance = {
  amount: 1250.32,
  currency_iso: "GBP",
};

describe("Header", () => {
  it("should show account number, description, sort code, title and balance", () => {
    const { getByText } = render(
      <Header provider={provider} balance={balance} />
    );

    expect(getByText(provider.title)).toBeInTheDocument();
    expect(getByText(provider.account_number)).toBeInTheDocument();
    expect(getByText(provider.sort_code)).toBeInTheDocument();
    expect(getByText(new RegExp(provider.description))).toBeInTheDocument();
    expect(getByText(balance.amount)).toBeInTheDocument();
    expect(getByText(balance.currency_iso)).toBeInTheDocument();
  });
});
