import moment from 'moment';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    date: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type:'SET_END_DATE',
    date: moment(0)
  })
})

test('should set sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type:'SORT_BY_DATE',
  });
});

test('set sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT',
  });
});

test('set text filter default', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: '',
  })
})

test('set text filter inputted value', () => {
  const action = setTextFilter('hello world');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'hello world',
  })
})