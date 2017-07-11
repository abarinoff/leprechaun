import { createAction, createReducer } from 'redux-act';

export const initExpenses = createAction('INIT_EXPENSES', (expenses) => ({expenses}));
export const addExpense = createAction('ADD_EXPENSE', (expense) => ({expense}));

export const requestExpensesStarted = createAction('REQUEST_EXPENSES_STARTED');
export const requestExpensesSucceeded = createAction('REQUEST_EXPENSES_SUCCEEDED', (expenses) => ({expenses}));

function handleInitExpenses(state, payload) {
    return payload.expenses;
}

function handleAddExpense(state, payload) {
    return [
        payload.expense,
        ...state
    ];
}

function handleRequestExpensesStarted(state, payload) {
    console.log("handleRequestExpensesStarted");
    return {
        ...state,
        isFetching: true
    };
}

function handleRequestExpensesSucceeded(state, payload) {
    console.log("handleRequestExpensesSucceeded");
    return {
        isFetching: false,
        data: payload.expenses
    };
}

export function fetchExpenses() {
    return function (dispatch) {
        console.log("fetchExpenses");
        dispatch(requestExpensesStarted());

        return fetch('/api/expenses')
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(expenses =>
                dispatch(requestExpensesSucceeded(expenses))
            );
    }
}

export default createReducer({
    [initExpenses]: handleInitExpenses,
    [addExpense]: handleAddExpense,

    [requestExpensesStarted]: handleRequestExpensesStarted,
    [requestExpensesSucceeded]: handleRequestExpensesSucceeded
}, {isFetching: false, data: []});