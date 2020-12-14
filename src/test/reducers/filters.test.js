const { default: filterReducer } = require("../../reducers/filters");
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filterReducer(undefined, {type: "@@INIT"});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });

});

test('should sort by amount', () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should sort by date', () => {
  const currentState = {
    text:'',
    startDate: null,
    endDate: null,
    sortBy: 'amount',
  };

  const action = {type: 'SORT_BY_DATE'};
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const state = filterReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'hello world'});
  expect(state.text).toBe('hello world');
});

test('should set startDate filter', () => {
  const state = filterReducer(undefined, {type: 'SET_START_DATE', date: moment(0)});
  expect(state.startDate).toEqual(moment(0));
});

test('should set startDate filter', () => {
  const state = filterReducer(undefined, {type: 'SET_END_DATE', date: moment(0)});
  expect(state.endDate).toEqual(moment(0));
});
