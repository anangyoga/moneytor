export const getTotalSpent = (data) => {
  return data?.reduce((total, transaction) => {
    return transaction.isExpense ? total + transaction.amount : total;
  }, 0);
};
