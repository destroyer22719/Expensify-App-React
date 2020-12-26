import { getExpensesTotal } from "../../selectors/expenses-total";
import { expensesData } from "../fixtures/expenses.data";

test('should return 0 for no expense', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up single expense', () => {
  const total = getExpensesTotal([expensesData[0]]);
  expect(total).toBe(195);
});

test('should correctly add up multiple expense', () => {
  const total = getExpensesTotal(expensesData);
  expect(total).toBe(7195);
});
