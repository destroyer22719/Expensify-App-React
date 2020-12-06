import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

const expensesDefault = []

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
  } = {}) => ({

  type: 'ADD_EXPENSE',
  expenses: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = (({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
}))

const editExpense =(id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

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
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expenses
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE': 
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        return expense
      })
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
    case 'SET_TEXT_FILTER': 
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}

const setTextFilter = (text) => ({ 
  type: 'SET_TEXT_FILTER',
  text,
})

const store = createStore(combineReducers({
  expenses: expenseReducer,
  filter: filterReducer
}));


store.subscribe(() => {
  console.log(store.getState());
})


const Rent = store.dispatch(addExpense({descriptor: 'Rent', amount: 100}));
const Hotel = store.dispatch(addExpense({descriptor: 'Hotel', amount: 1000}));

console.log(Hotel.expenses.id)
store.dispatch(removeExpense({id: Hotel.expenses.id}))
store.dispatch(editExpense(Rent.expenses.id, {amount: 500}));
store.dispatch(setTextFilter('Another Rent'))