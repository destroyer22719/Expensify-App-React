import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, id, amount, createdAt}) => (
  <div>
    <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
    <p>Amount: <span>{amount}</span> | Date: <span>{createdAt}</span></p>
    <button onClick={() => {
      dispatch(removeExpense({id}));
    }}>Remove</button>
  </div>
)


export default connect()(ExpenseListItem);