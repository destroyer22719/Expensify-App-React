import React from 'react';
import { shallow } from 'enzyme';
import { expensesData } from '../fixtures/expenses.data';
import '../setupTest';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { getExpensesTotal } from '../../selectors/expenses-total';

test('should render ExpensesSummary', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={expensesData.length} expensesTotal={getExpensesTotal(expensesData)}/>);
  expect(wrapper).toMatchSnapshot();
});


// test('should render a single ExpensesSummary', () => {
//   const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={getExpensesTotal(expensesData[0])}/>);
//   expect(wrapper.prop('expensesCount')).toBe(1);
//   expect(wrapper.prop('expensesTotal')).toEqual(expensesData[0].amount);
//   expect(wrapper).toMatchSnapshot();
// });


// test('should render 2 ExpensesSummary', () => {
//   const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={getExpensesTotal([expensesData[0], expensesData[1]])}/>);
//   expect(wrapper).toMatchSnapshot();
//   expect(wrapper.prop('expensesCount')).toBe(2);
//   expect(wrapper.prop('expensesTotal')).toEqual(expensesData[0].amount + expensesData[1].amount);
// });