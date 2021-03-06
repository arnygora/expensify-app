import React, {Component} from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

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
            <form className='form' action="" onSubmit={this.onSubmit}>
                {this.state.error && <p className='form__error'>Please, fill "Amount" & "Description" fields</p>}
                <input
                    type="text"
                    className='text-input'
                    placeholder="Description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.changeDescriptionInput}
                />
                <input
                    type="text"
                    className='text-input'
                    placeholder='Amount'
                    value={this.state.amount}
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
                <textarea
                    className='text-select'
                    name="note"
                    placeholder='add a note for you expense'
                    value={this.state.note}
                    onChange={this.changeNoteArea}
                >
                    </textarea>
                <div>
                    <button className='button'>Add expense</button>
                </div>
            </form>
        )
    }
}
