import React from 'react';
import { connect } from 'react-redux';
import { removeExpense, editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class EditPage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.removeExpense({id:this.props.expense.id});
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
      {!this.props.expense && <p>Not Found</p>}
        {      
          this.props.expense && 
          <div>
            <ExpenseForm 
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove Expense</button>
          </div>
        }
    </div>
    )
  }
}

// const EditPage = (props) => {
//   console.log(props.expense)
//   return (
//     <div>
//     {!props.expense && <p>Not Found</p>}
//       {      
//         props.expense && <ExpenseForm 
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, {...expense}))
//           props.history.push('/')
//         }}
//     />}
//     </div>
// )}


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expenses => {
      return expenses.id === props.match.params.id
    })
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditPage);