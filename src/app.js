import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses'


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));

store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
