import React from 'react';
import { connect } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates'

export class ExpenseListFilters extends React.Component {

  state = {
    calendarFocus: null,
  }

  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocus) => {
    this.setState(() => {
      this.setState(() => ({
        calendarFocus
      }))
    })
  }

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = e => {
    if (e.target.value === "amount") this.props.sortByAmount();
    else if (e.target.value === "date") this.props.sortByDate();
  }

  render() {
    return (
      <div>
      <input 
        type="text" 
        value={this.props.filters.text} 
        onChange={this.onTextChange}/>
      <select
        onChange={this.onSortChange}
      >
        <option value="date">Date</option>
        <option value="amount" >Amount</option>
      </select>
      <DateRangePicker 
        id="DateRangePicker"
        startDateId="myStartDateId"
        endDateId="myEndDateId"
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocus}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filter
})

const matchDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByAmount),
  sortByAmount: () => dispatch(sortByAmount),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),

})

export default connect(mapStateToProps, matchDispatchToProps)(ExpenseListFilters);