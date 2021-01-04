const { createStore, combineReducers, applyMiddleware, compose } = require("redux");
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
const { default: expenseReducer } = require("../reducers/expenses");
const { default: filterReducer } = require("../reducers/filters");

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filter: filterReducer,
    auth: authReducer,
  }),
  composeEnhancer(applyMiddleware(thunk))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
