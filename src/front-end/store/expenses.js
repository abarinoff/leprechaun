import { createAction, createReducer } from 'redux-act';

export const initExpenses = createAction('INIT_EXPENSES', (expenses) => ({expenses}));
export const addExpense = createAction('ADD_EXPENSE', (expense) => ({expense}));

function handleInitExpenses(state, payload) {
    return payload.expenses;
}

function handleAddExpense(state, payload) {
    return [
        payload.expense,
        ...state
    ];
}

export default createReducer({
    [initExpenses]: handleInitExpenses,
    [addExpense]: handleAddExpense
}, []);