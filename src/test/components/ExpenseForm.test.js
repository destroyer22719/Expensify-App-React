import React from 'react';
import {shallow} from 'enzyme';
import '../setupTest';
import ExpenseForm from '../../components/ExpenseForm';
import { expensesData } from '../fixtures/expenses.data';
import moment from 'moment';

test('should render Expense', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expensesData[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('errorState').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'hello world';

  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set description on input change', () => {
  const value = 'hello world';

  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: {value}
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set description on input change', () => {
  const value = '23.50';

  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should set description on invalid input change', () => {
  const value = '23.500';

  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).not.toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expensesData[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('errorState')).toBe('');
  
  const {id, ...expectedResponse} = expensesData[0]
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expectedResponse);
});

test('should set a new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('#SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now)
});

test('should set a new focus on date change', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('#SingleDatePicker').prop('onFocusChange')({focused: true});
  expect(wrapper.state('calendarFocus')).toEqual(true)
});