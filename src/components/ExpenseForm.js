import React, {Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

// equal new Date()
const now = moment();

export default class ExpenseForm extends Component {
    state = {
        description: '',
        amount: 0,
        note: '',
        createdAt: moment(),
        calendarFocused: false
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

    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    };

    render() {
        return (
            <div>
                {now.locale("uk").format('LLL')}
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
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=> false}
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