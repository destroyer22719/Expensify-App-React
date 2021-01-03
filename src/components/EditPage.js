import React from 'react';
import { connect } from 'react-redux';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';


export class EditPage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.startRemoveExpense({id:this.props.expense.id});
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
//           props.dispatch(startEditExpense(props.expense.id, {...expense}))
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
  startEditExpense: (expenseId, expense) => dispatch(startEditExpense(expenseId, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);