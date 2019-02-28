import React from 'react'
import {connect} from 'react-redux';
import {removeExpense} from "../actions/expenses";


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
    return (
        <div style={{background: 'cyan', padding: 30}}>
            <p style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', background: 'indianRed', padding: 15}}>
                {description}
                <b>created at {createdAt}</b>
                <span>amount is {amount}</span>
            <button onClick={() => {
                dispatch(removeExpense({id}))
            }}>Remove</button>
            </p>
        </div>
    )
};

export default connect()(ExpenseListItem)