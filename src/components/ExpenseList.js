import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <p>{props.filters.text}</p>
    <p>{props.expenses.length}</p>
  </div>
);

const mapStateToProps = (state) => {
  console.log(state.filter)
  return {
    expenses: state.expenses,
    filters: state.filter,
  }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList;