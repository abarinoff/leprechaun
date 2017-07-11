import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import initStore from 'store';
import TrackerView from 'tracker/TrackerView';
import {initExpenses} from 'store/expenses';

import './index.scss';

const store = initStore();

const expenses = fetch('/api/expenses')
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log('expenses', json)
        store.dispatch(initExpenses(json));
    }).catch(function(ex) {
        console.log('parsing failed', ex)
    });

ReactDOM.render(
    <Provider store={store}>
        <TrackerView/>
    </Provider>,
    document.getElementById('app')
);