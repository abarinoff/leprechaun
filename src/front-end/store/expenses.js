import { createAction, createReducer } from 'redux-act';

export const addExpense = createAction('ADD_EXPENSE', (expense) => ({expense}));

function handleAddExpense(state, payload) {
    return [
        payload.expense,
        ...state
    ];
}

export default createReducer({
    [addExpense]: handleAddExpense
}, [{product: 'Apple', spent: 10}, {product: 'Orange', spent: 5}]);
