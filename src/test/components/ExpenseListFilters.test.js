import React from 'react';
import { shallow } from 'enzyme';
import '../setupTest';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import { altFilters, filters } from '../fixtures/filters.data';
import moment from 'moment';
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
});

test('should render expense list filters', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render expense with set filters', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {

  wrapper.find('input').at(0).simulate('change', {
    target: {value: altFilters.text}
  });

  expect(setTextFilter).toHaveBeenCalledWith(altFilters.text)  
});

test('should sort by date', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: {value: 'date'}
  });
  expect(sortByDate).toHaveBeenCalled();
  expect(sortByAmount).not.toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: {value: 'amount'}
  });
  expect(sortByDate).not.toHaveBeenCalled();
  expect(sortByAmount).toHaveBeenCalled();
});

test('should have handled date changes', () => {
  const startDate = moment(0)
  const endDate = moment(0).add(8, 'years');

  wrapper.find('#DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);

});

test('should handle date focus change', () => {
  const calendarFocused = 'endDate';
  wrapper.find('#DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocus')).toBe(calendarFocused);
});