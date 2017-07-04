import React, { Component } from 'react';
import ExpenseInput from '../ExpenseInput';

import './TrackerView.scss'

export default class TrackerView extends Component {

    render() {
        return (
            <div className="TrackerView">
                <ExpenseInput/>
            </div>
        );
    }
}