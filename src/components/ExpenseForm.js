import React, {Component} from 'react'

export default class ExpenseForm extends Component {
    state = {
        description: '',
        amount: 0,
        note: ''
    };

    changeDescriptionInput = (e) => {
        let description = e.target.value;
        this.setState(() => ({description}));
    };

    changeNumberInput = (e) => {
        let amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    changeNoteArea = (e) => {
        let note = e.target.value;
        this.setState(() => ({note}));
    };

    render() {
        return (
            <div>
                <form action="">
                    <input type="text"
                           placeholder='description'
                           autoFocus
                           onChange={this.changeDescriptionInput}
                    />
                    <input type="text"
                           value={this.state.amount}
                           placeholder='Amount'
                           onChange={this.changeNumberInput}
                    />
                    <textarea name="note"
                              placeholder='add a note for you expense'
                              onChange={this.changeNoteArea}
                    >
                    </textarea>
                    <button onClick={((e) => {
                        e.preventDefault();
                        console.log(this.state)

                    })}>Add expense
                    </button>
                </form>
            </div>
        )
    }
}