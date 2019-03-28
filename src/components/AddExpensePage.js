import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
    <Fragment>
        <div className="page-header">
            <div className='container'>
                <h1>Add Expense</h1>
            </div>
        </div>
        <div className="container">
            <ExpenseForm
                onSubmit={(expense) => {
                    props.dispatch(startAddExpense(expense));
                    props.history.push('/');
                }}
            />
        </div>
    </Fragment>
);

export default connect()(AddExpensePage);
