import {createStore} from 'redux'

const store = createStore((state = {count: 10}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            return state
    }
});

console.log(store.getState());


store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT'
});
console.log(store.getState());