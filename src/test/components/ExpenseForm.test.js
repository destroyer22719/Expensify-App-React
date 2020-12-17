import React from 'react';
import {shallow} from 'enzyme';
import '../setupTest';
import ExpenseForm from '../../components/ExpenseForm';
import { expensesData } from '../fixtures/expenses.data';

test('should render Expense', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expensesData[0]} />);
  expect(wrapper).toMatchSnapshot();
});