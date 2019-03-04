import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, note, createdAt}) => {
    return (
        <div style={{background: 'cyan', padding: 30}}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                background: 'indianRed',
                padding: 15
            }}>
                <h3><Link to={`/edit/${id}`}
                >{description}</Link></h3>
                <b>created at {createdAt}</b>
                <span>amount is {amount}</span>
                <span>note: {note}</span>
                <button onClick={() => {
                    dispatch(removeExpense({id}))
                }}>Remove
                </button>
            </div>
        </div>
    )
};

export default connect()(ExpenseListItem)