import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import expenses from 'store/expenses';

const initStore = () => {
    const reducers = combineReducers({
        expenses
    });

    return createStore(reducers, applyMiddleware(thunk));
};

export default initStore;