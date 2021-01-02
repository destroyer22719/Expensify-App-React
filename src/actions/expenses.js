import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0  
    } = expenseData;
    const expenses = { description, note, amount, createdAt};
    return database.ref('expenses')
      .push(expenses)
      .then( ref => dispatch(addExpense({
        id: ref.key,
        ...expenses
      })));
  }
};

export const removeExpense = (({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
}));

export const editExpense =(id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = (expenseData = {}) => {
  return dispatch => {
    return database.ref('expenses')
      .once('value')
      .then(snapshot => {
        console.log(snapshot);
        const expenses = [];
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        console.log(expenses);
        dispatch(setExpenses(expenses));
      });
  };
};