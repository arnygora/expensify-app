import React from 'react'
import {Link} from 'react-router-dom'

const ExpenseListItem = ({id, description, amount, note, createdAt}) => {
    return (
        <div>
            <h3>
                <Link to={`/edit/${id}`}
                >{description}
                </Link></h3>
            <b>created at {createdAt}</b>
            <span>amount is {amount}</span>
            <span>note: {note}</span>
        </div>
    )
};

export default ExpenseListItem
