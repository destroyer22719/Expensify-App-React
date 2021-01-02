const { removeExpense, editExpense, addExpense, startAddExpense, setExpenses, startSetExpenses } = require("../../actions/expenses");
const { expensesData } = require("../fixtures/expenses.data");
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const myExpensesData = {};
  expensesData.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description, note, amount, createdAt};
  });

  database.ref('expenses').set(expensesData).then(() => done());
})

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {amount: 100})
  expect(action).toEqual({
    id: '123abc',
    type:'EDIT_EXPENSE',
    updates: {
      amount: 100
    }
  });
});

test('should setup add expense action object with provided values', () => {
  
  const action = addExpense(expensesData[2]);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: expensesData[2],
  });
});

test('should add expense and store to firebase', done => {
  const store = createMockStore({});
  const expenseData = {
    description: 'mouse',
    amount: '15000',
    note: 'this one is better',
    createdAt: 10000,
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData,
      }
    });
    
    return database.ref(`expenses/${actions[0].id}`).once('value');
  }).then(snapshot => {
    expect(snapshot.val()).toEqual(expenseData);
  });
  done();
});

test('should add expense and store with default values', (done) => {
  const store = createMockStore({});
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
      }
    });

    return database.ref(`expenses/${actions[0].id}`).once('value');
  }).then(snapshot => {
    expect(snapshot.val()).toEqual({
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    });
  });
  done();
});

test('should setup set expense actions object with data', () => {
  const action = setExpenses(expensesData);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenseData
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenseData,
    });
  });
  done();
});

// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expenses: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
