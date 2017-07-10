import { createAction, createReducer } from 'redux-act';

export const createExpense = createAction('CREATE_EXPENSE', (expense) => ({expense}));

function handleCreateExpense(state, payload) {
    return [
        payload,
        ...state
    ];
}

export default createReducer({
    [createExpense]: handleCreateExpense
}, [{product: 'Apple', spent: 10}, {product: 'Orange', spent: 5}]);
