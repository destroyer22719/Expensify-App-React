import React from 'react';
import { connect } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {

  state = {
    calendarFocus: null,
  }
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange = (calendarFocus) => {
    this.setState(() => {
      this.setState(() => ({
        calendarFocus
      }))
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
      <input 
        type="text" 
        value={this.props.filters.text} 
        onChange={e => {
          this.props.dispatch(setTextFilter(e.target.value))
      }}/>
      <select
        onChange={(e) => {
          if (e.target.value === "amount") this.props.dispatch(sortByAmount());
          else if (e.target.value === "date") this.props.dispatch(sortByDate());
        }}
      >
        <option value="date">Date</option>
        <option value="amount" >Amount</option>
      </select>
      <DateRangePicker 
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

const mapStateToProps = (state) => {
  return {
    filters: state.filter
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);