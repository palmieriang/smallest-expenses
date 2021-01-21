import React from "react";
import { render } from "@testing-library/react";
import Header from "./index";
import * as user from "../../fixtures/transactions.json";

describe("Header", () => {
  it("should show account number, description, sort code, title and balance", () => {
    const { getByText } = render(
      <Header provider={user.provider} balance={user.balance} />
    );

    expect(getByText(user.provider.title)).toBeInTheDocument();
    expect(getByText(user.provider.account_number)).toBeInTheDocument();
    expect(getByText(user.provider.sort_code)).toBeInTheDocument();
    expect(
      getByText(new RegExp(user.provider.description))
    ).toBeInTheDocument();
    expect(getByText(new RegExp(user.balance.amount))).toBeInTheDocument();
    expect(
      getByText(new RegExp(user.balance.currency_iso))
    ).toBeInTheDocument();
  });
});
