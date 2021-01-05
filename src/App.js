import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { fetchExpenses } from "./utils/api";
import Header from "./Header";
import TransactionsList from "./TransactionsList";

const getSortedExpenses = (transactions, numberOfTransactions = 10) => {
  return transactions
    .filter((transaction) => transaction.amount.value < 0)
    .sort((a, b) => b.amount.value - a.amount.value)
    .slice(0, numberOfTransactions);
};

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchExpenses()
      .then((data) => {
        setUser({
          ...data,
          transactions: getSortedExpenses(data.transactions),
        });
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <p>{error}</p>
      </Wrapper>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Header provider={user.provider} balance={user.balance} />
      {user?.transactions.length > 0 ? (
        <Wrapper>
          <TransactionsList transactions={user.transactions} />
        </Wrapper>
      ) : (
        <p>No transactions available</p>
      )}
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 10px;
`;

export default App;
