import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ dispatch, description, id, amount, createdAt}) => (
  <div>
    <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
    <p>
      Amount: <span>{numeral(amount / 100).format('$0,0.00')}</span> <br/> 
      Date: <span>{moment(createdAt).format("dddd, MMMM Do, YYYY")}</span></p>
    <button onClick={() => {
      dispatch(removeExpense({id}));
    }}>Remove</button>
  </div>
)


export default connect()(ExpenseListItem);