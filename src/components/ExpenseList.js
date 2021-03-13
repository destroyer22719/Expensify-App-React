import React from "react";
import { connect } from "react-redux";
import getVisibleExpenses from "../selectors/expenses";
import { getExpensesTotal } from "../selectors/expenses-total";
import ExpenseListItem from "./ExpenseListItem";
import { ExpensesSummary } from "./ExpensesSummary";

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {props.expenses.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No expenses</span>
                </div>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
            )}
        </div>
    </div>
);

const mapStateToProps = (state) => {
    console.log(state.filter);
    return {
        expenses: getVisibleExpenses(state.expenses, state.filter),
    };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;
