import React from 'react';
import {shallow} from 'enzyme';
import '../setupTest';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expensesData } from '../fixtures/expenses.data';

let startAddExpense, history, wrapper;
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn()};
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesData[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expensesData[1]);
});
