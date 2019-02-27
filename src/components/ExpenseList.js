import React from 'react'
import {connect} from 'react-redux'

const ExpenseList = (props) => (
    <div>
        <h1>Hello from Expense List Component</h1>
        {
            props.expenses.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.description}</p>
                        <span>amount => {item.amount} </span>
                        <span>created {item.createdAt}</span>
                    </div>
                )
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

export default connect(mapStateToProps)(ExpenseList);
