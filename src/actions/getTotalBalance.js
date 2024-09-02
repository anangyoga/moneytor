export const getTotalBalance = (data) => {
  return data?.reduce((balance, transaction) => {
    return transaction.isExpense ? balance - transaction.amount : balance + transaction.amount;
  }, 0);
};
