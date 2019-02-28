import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
    <div>
        <h1>Hello from Expense List Component</h1>
        {
            props.expenses.map((item) => {
                return <ExpenseListItem key={item.id} {...item}/>
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
