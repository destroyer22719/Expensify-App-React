import React from 'react';
import {shallow} from 'enzyme';
import '../setupTest';
import { AddExpensePage } from '../../components/AddExpensePage';
import { expensesData } from '../fixtures/expenses.data';

let onSubmit, history, wrapper;
beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn()};
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>)
})

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  expect(wrapper).toMatchSnapshot();
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesData[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expensesData[1]);
});
