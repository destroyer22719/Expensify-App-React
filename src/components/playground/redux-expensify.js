import {createStore, combineReducers} from 'redux';

const expensesDefault = []

const demoState = {
  expenses: [{
    id: '1',
    descriptor: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 100000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  }
};

const expenseReducer = (state = expensesDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const filterDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}
const filterReducer = (state = filterDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  expenses: expenseReducer,
  filter: filterReducer
}));

console.log(store.getState())