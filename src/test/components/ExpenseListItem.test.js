import React from 'react';
import { shallow } from 'enzyme';
import { expensesData } from '../fixtures/expenses.data';
import '../setupTest';
import { ExpenseListItem } from '../../components/ExpenseListItem';

test('test for individual ExpenseListItem item', () => {
  const wrapper = shallow(<ExpenseListItem {...expensesData[0]}/>);
  expect(wrapper).toMatchSnapshot();
});
