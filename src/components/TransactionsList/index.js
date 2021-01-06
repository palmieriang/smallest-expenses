import React from "react";
import PropTypes from "prop-types";
import { Table, TableHead, TableTr, TableTh, TableTd } from "./style";

const TransactionsList = ({ transactions }) => {
  const transaction = transactions.map(
    ({ id, amount, category_title, date, description }) => (
      <TableTr key={id}>
        <TableTd>
          {amount.currency_iso}
          {amount.value}
        </TableTd>
        <TableTd>{category_title}</TableTd>
        <TableTd data-testid="transaction-description">{description}</TableTd>
        <TableTd>{date}</TableTd>
      </TableTr>
    )
  );

  return (
    <Table>
      <TableHead>
        <TableTr>
          <TableTh>Amount</TableTh>
          <TableTh>Category</TableTh>
          <TableTh>Description</TableTh>
          <TableTh>Date</TableTh>
        </TableTr>
      </TableHead>
      <tbody>{transaction}</tbody>
    </Table>
  );
};

TransactionsList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      amount: PropTypes.shape({
        currency_iso: PropTypes.string,
        value: PropTypes.number,
      }),
      category_title: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default TransactionsList;
