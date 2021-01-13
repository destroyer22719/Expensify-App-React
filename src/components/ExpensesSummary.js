import React from 'react';
import { Link } from 'react-router-dom';

export const ExpensesSummary = props => (
  <div className="page-header">
  <div className="content-container">
    <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
    <div className="page-header__actions">
      <Link className="button" to="/create">Add Expense</Link>
    </div>
  </div>
</div>
)