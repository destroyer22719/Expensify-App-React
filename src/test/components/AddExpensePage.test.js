import React from 'react';
import {shallow} from 'enzyme';
import '../setupTest';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expensesData } from '../fixtures/expenses.data';

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn()};
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>)
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesData[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expensesData[1]);
});
