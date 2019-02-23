import {createStore, combineReducers} from 'redux'

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT':
            return {text: 'rent'};
        case 'SORT_BY':
            return {sortBy: 'date'};
        case 'START_DATE':
            return {startDate: undefined};
        case 'END_DATE':
            return {endDate: undefined};
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);


console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'jjsidfjn',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};


