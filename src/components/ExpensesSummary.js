import React from 'react';

export const ExpensesSummary = props => (
  <div>
    <h2>Viewing {props.expensesCount} totalling $ {props.expensesTotal}</h2>
  </div>
)