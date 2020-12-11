import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <p>{props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}</p>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filter)
  }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList;