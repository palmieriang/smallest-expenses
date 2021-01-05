import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TransactionsList = ({ transactions }) => {
  const transaction = transactions.map(
    ({ id, amount, category_title, date, description }) => (
      <TableTr key={id}>
        <TableTd>
          {amount.currency_iso}
          {amount.value}
        </TableTd>
        <TableTd>{category_title}</TableTd>
        <TableTd>{description}</TableTd>
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #1995d0;
  border: 1px solid #dee2e6;
  color: #fff;
  text-transform: uppercase;
`;

const TableTr = styled.tr`
  border: 1px solid #dee2e6;

  &:nth-child(even) {
    background-color: #0000000d;
  }
`;

const TableTh = styled.th`
  border: 1px solid #dee2e6;
  text-align: left;
  padding: 12px;
`;

const TableTd = styled.td`
  border: 1px solid #dee2e6;
  text-align: left;
  padding: 12px;
`;

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
