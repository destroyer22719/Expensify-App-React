import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';
import ExpenseListItem from './ExpenseListItem';
import { ExpensesSummary } from './ExpensesSummary';

export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {
      !props.expenses.length ? (
        <p>No Expenses</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense}/>
        })
      )
    }
    <ExpensesSummary expenseCount={props.expenses.length} expensesTotal={getExpensesTotal(props.expenses)/100}/>
  </div>
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: getVisibleExpenses(state.expenses, state.filter)
  }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList;