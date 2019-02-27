import React from 'react'

const ExpenseListItem = ({description, amount, createdAt}) => {
    return (
        <div style={{background: 'cyan', padding: 30}}>
            <p style={{background: 'indianRed', padding: 15}}>
                {description}
            </p>
                <b>created at {createdAt}</b>
                <span>amount is {amount}</span>
        </div>
    )
};


export {ExpenseListItem}