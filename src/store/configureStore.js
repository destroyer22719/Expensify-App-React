const { createStore, combineReducers } = require("redux");
const { default: expenseReducer } = require("../reducers/expenses");
const { default: filterReducer } = require("../reducers/filters");

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filter: filterReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
