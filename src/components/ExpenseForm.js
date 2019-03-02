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
        amount: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
    };

    changeDescriptionInput = (e) => {
        let description = e.target.value;
        this.setState(() => ({description}));
    };

    changeNumberInput = (e) => {
        let amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    changeNoteArea = (e) => {
        let note = e.target.value;
        this.setState(() => ({note}));
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: true}))
        } else {
            this.setState(() => ({error: false}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render() {
        return (
            <div> {this.state.error && <p>Please, fill "Amount" & "Description" fields</p>}
                <form action="" onSubmit={this.onSubmit}>
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
                        isOutsideRange={() => false}
                    />
                    <textarea name="note"
                              placeholder='add a note for you expense'
                              onChange={this.changeNoteArea}
                    >
                    </textarea>
                    <button>Add expense
                    </button>
                </form>
            </div>
        )
    }
}