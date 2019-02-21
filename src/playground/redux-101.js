import {createStore} from 'redux'

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {count: state.count + increment};
        case 'DECREMENT':
            const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : state.count;
            return {count: state.count - decrement};
        case 'SET':
            return {count: action.count};
        case 'RESET':
            return {count: 0};
        default:
            return state
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: null
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
   type: "SET",
   count: 101
});
