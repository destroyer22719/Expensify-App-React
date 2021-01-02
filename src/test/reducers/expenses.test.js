import expensesReducer from '../../reducers/expenses';
import {expensesData} from '../fixtures/expenses.data'
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([])
});

test('should remove response by id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: expensesData[1].id, 
  };

  const state = expensesReducer(expensesData, action);
  expect(state).toEqual([expensesData[0], expensesData[2]]);
});

test('should add an expense', () => {
  const action = {
    type:'ADD_EXPENSE',
    expenses: {
      id: '4',
      description: 'Groceries',
      note: '',
      amount: 1000,
      createdAt: moment(0).add('4','weeks'),
    },
  };
  const state = expensesReducer(expensesData, action);
  expect(state[state.length - 1]).toEqual(action.expenses);
});

test('should edit an expense', () => {
  const action = {
    type:'EDIT_EXPENSE',
    id: expensesData[2].id,
    updates: {
      description: 'Changed',
    },
  };
  const state = expensesReducer(expensesData, action);
  expect(state[2].description).toEqual(action.updates.description);
});

test('should not edit an expense', () => {
  const action = {
    type:'EDIT_EXPENSE',
    id: 4,
    updates: {
      description: 'Changed',
    },
  };
  const state = expensesReducer(expensesData, action);
  expect(state).toEqual(expensesData);
});

test('should set expenses', () => {
  const actions = {
    type: 'SET_EXPENSES',
    expenses: [expensesData[1]]
  };

  const state = expensesReducer(expenses, actions);
  expect(state).toEqual([expenses[1]]);
});
