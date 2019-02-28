import React, {Component} from 'react'

export default class ExpenseForm extends Component {
    state={
        description: '',
        amount: 0
    }
    render() {
        return (
            <div>
                <form action="">
                    <input type="text"
                           placeholder='description'
                           autoFocus/>
                    <input type="number"
                           placeholder='Amount'/>
                    <textarea name="note"
                           placeholder='add a note for you expense'
                    >
                    </textarea>
                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}