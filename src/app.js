import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase'
import {startSetExpense} from "./actions/expenses";

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>);

ReactDOM.render(<p>LOADING....</p>, document.getElementById('app'));

store.dispatch(startSetExpense()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});



