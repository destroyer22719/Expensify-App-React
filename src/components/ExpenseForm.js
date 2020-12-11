import 'react-dates/initialize';
import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'))

class ExpenseForm extends React.Component {
  state={
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocus: false,
    errorState: '',
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}))
    }
  }
  onDateChange = (date) => {
    if (date) this.setState(() => ({createdAt: date}))
  }
  onFocusChange = ({focused}) => {
    this.setState(() => ({
     calendarFocus: focused
    }))
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        errorState: 'Cannot can have description or amount empty'
      }))
    } else {
      this.setState(() => ({errorState: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: (+this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      })
    }
  }
  render() {
    return (
      <div>
        {<div>{this.state.errorState}</div>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description" 
            autoFocus 
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
          <input 
            type="number" 
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}  
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea 
            placeholder="Add a note for your expense (option)" 
            onChange={this.onNoteChange}
          />
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExpenseForm;