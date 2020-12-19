import React from 'react';
import {shallow} from 'enzyme';
import '../setupTest';
import { expensesData } from '../fixtures/expenses.data';
import { EditPage } from '../../components/EditPage';

let editExpense, history, removeExpense, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn()};
  wrapper = shallow(
    <EditPage 
      editExpense={editExpense} 
      history={history}
      removeExpense={removeExpense}
      expense={expensesData[1]}
    />)
});

test('should render EditPage', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expensesData[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expensesData[1].id, expensesData[1])
})

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expensesData[1].id})
})

test('', () => {
  
})