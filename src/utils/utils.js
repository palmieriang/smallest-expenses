export const getSortedExpenses = (transactions, numberOfTransactions = 10) => {
  return transactions
    .filter((transaction) => transaction.amount.value < 0)
    .sort((a, b) => b.amount.value - a.amount.value)
    .slice(0, numberOfTransactions);
};
