import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

const expensesDefault = []

//expense reducer types
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

// const demoState = {
//   expenses: [{
//     id: '1',
//     descriptor: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 100000,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined,
//   }
// };

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
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date' 
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount' 
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date 
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date 
      }
    default:
      return state;
  }
}

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter(expenses => {
    const startDateMatch = typeof startDate !== "number" || expenses.createdAt >= startDate;
    const endDateMatch = typeof endDate !== "number" || expenses.created <= endDate;
    const textMatch = typeof text !== "string" || expenses.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}

//filter reducer types
const setTextFilter = (text) => ({ 
  type: 'SET_TEXT_FILTER',
  text,
})

const sortByAmount = () => ({ 
  type: 'SORT_BY_AMOUNT',
})

const sortByDate = () => ({ 
  type:'SORT_BY_DATE',
})

const setStartDate = date => ({
  type: 'SET_START_DATE',
  date,
})

const setEndDate = date => ({
  type: 'SET_END_DATE',
  date,
})

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filter: filterReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
})

// store.dispatch(setStartDate(123))
// store.dispatch(setEndDate(123))

const Rent = store.dispatch(addExpense({description: 'Rent', amount: 10000, createdAt:-1000}));
const Hotel = store.dispatch(addExpense({description: 'Hotel', amount: 1000, createdAt:1000}));

store.dispatch(sortByAmount())
// store.dispatch(setEndDate(1250))
// console.log(Hotel.expenses.id);
// store.dispatch(removeExpense({id: Hotel.expenses.id}));
// store.dispatch(editExpense(Rent.expenses.id, {amount: 500}));
// store.dispatch(setTextFilter('Another Rent'));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());