import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import TrackerView from 'tracker/TrackerView';

import './index.scss';

const initialState = {
    expenses: [
        {
            product: 'Apple',
            spent: 10,
        },
        {
            product: 'Orange',
            spent: 5
        }
    ]
};

let store = createStore((state = initialState) => state);

ReactDOM.render(
    <Provider store={store}>
        <TrackerView/>
    </Provider>,
    document.getElementById('app')
);