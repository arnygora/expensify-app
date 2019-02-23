import React, {Component} from 'react'

import { createStore } from 'redux'

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + action.amount};
        case 'DECREMENT':
            return {count: state.count - action.amount};
        case 'RESET':
            return {count: 0};
        default:
            return state;
    }
}

function increment(amount) {
    return {type: 'INCREMENT', amount}
}

function decrement(amount) {
    return {type: 'DECREMENT', amount}
}

function reset() {
    return {type: 'RESET'}
}

const store = new createStore(reducer, initialState);

class Dojo extends Component {

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    };

    decrement = () => {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(decrement(amount))
    };

    increment = () => {
        let amount = parseInt(this.refs.amount.value || 1);
        store.dispatch(increment(amount))
    };

    reset = () => {
        store.dispatch(reset())
    };

    render() {
        const count = store.getState().count
        return (
            <div style={{backgroundColor: '#d5f9fb', width: 200, margin: '0 auto', padding: 5, textAlign: 'center'}}>
                <p style={{fontWeight: 'bold', fontSize: 50}}>{count}</p>
                <button onClick={this.increment}>+ 1</button>
                <button onClick={this.decrement}>- 1</button>
                <button onClick={this.reset}>reset</button>
                <input type="text" ref='amount' defaultValue='1'/>
            </div>
        )
    }
}

export {Dojo}