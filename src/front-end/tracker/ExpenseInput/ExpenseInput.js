import React, { Component } from 'react';

import './ExpenseInput.scss'

export default class ExpenseInput extends Component {

    render() {
        return (
            <div className="ExpenseInput">
                <input placeholder="Test"/>
            </div>
        );
    }
}