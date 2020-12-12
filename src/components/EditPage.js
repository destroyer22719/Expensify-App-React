import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


const EditPage = (props) => {
  console.log(props.expense)
  return (
    <div>
    {!props.expense && <p>Not Found</p>}
      {      
        props.expense && <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, {...expense}))
          props.history.push('/')
        }}
    />}
    </div>
)}


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expenses => {
      return expenses.id === props.match.params.id
    })
  }
}

export default connect(mapStateToProps)(EditPage);