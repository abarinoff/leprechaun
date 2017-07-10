import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import initStore from 'store';
import TrackerView from 'tracker/TrackerView';

import './index.scss';

const store = initStore();

ReactDOM.render(
    <Provider store={store}>
        <TrackerView/>
    </Provider>,
    document.getElementById('app')
);