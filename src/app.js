import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, {history} from './routers/AppRouters'
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import { startSetExpenses } from './actions/expenses';

const store = configureStore; 
// store.dispatch(setTextFilter('Bill'))
const state = store.getState();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged(user => {
  console.log('rendering');
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    })
  } else {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
    });
    history.push('/');
  }
});