export const getExpensesTotal = (expenses) => {
  // let total = 0;
  // for (const expense of expenses) {
  //   total += expense.amount;
  // }
  // return total;
  return expenses.map(expense => expense.amount).reduce((sum, val) => sum + val, 0)
};
