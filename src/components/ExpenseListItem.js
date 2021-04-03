import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { startRemoveExpense } from "../actions/expenses";
import moment from "moment";
import numeral from "numeral";

export const ExpenseListItem = ({
    startRemoveExpense,
    description,
    id,
    amount,
    createdAt,
}) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">
                {moment(createdAt).format("MMMM Do, YYYY")}
            </span>
        </div>
        <h3 className="list-item__data">
            {numeral(amount / 100).format("$0,0.00")}
        </h3>
    </Link>
);

const matchDispatchToProps = (dispatch) => ({
    startRemoveExpense: (id) => dispatch(startRemoveExpense({ id })),
});

export default connect(null, matchDispatchToProps)(ExpenseListItem);
