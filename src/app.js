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
    console.log('rendered')
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

store.dispatch(startSetExpenses()).then(() => {
  renderApp();
})

// // store.dispatch(startSetExpenses()).then(() => {
// //   ReactDOM.render(jsx, document.getElementById('app'));
// // });

// firebase.auth().onAuthStateChanged(user => {
//   console.log(history);
//   if (user) {
//     console.log(history.location.pathname);
//     store.dispatch(startSetExpenses()).then(() => {
//       renderApp();
//       if (history.location.pathname === '/') {
//         history.push('/dashboard');
//       }
//     })
//   } else {
//     console.log('logged out');
//     renderApp();
//     history.push('/');
//   }
// });

firebase.auth().onAuthStateChanged(user => {
  console.log(history);
  if (user) {
    console.log('logged in');
  } else {
    console.log('logged out');
  }
});