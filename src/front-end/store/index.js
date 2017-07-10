import {createStore, combineReducers} from "redux";

import expenses from 'store/expenses';

const initStore = () => {
    const reducers = combineReducers({
        expenses
    });

    return createStore(reducers);
};

export default initStore;