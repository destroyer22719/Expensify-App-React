import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouters'
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

const store = configureStore; 
// store.dispatch(setTextFilter('Bill'))
const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'))
})

