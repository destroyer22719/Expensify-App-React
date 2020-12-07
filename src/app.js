import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouters'
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';



const store = configureStore; 
store.dispatch(addExpense({description: 'Water Bill'}));
store.dispatch(addExpense({description: 'Gas Bill'}));
store.dispatch(setTextFilter('Bill'))
const state = store.getState();
console.log(state)
const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'))
