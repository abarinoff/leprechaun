import React, {Component} from 'react';

import './ExpensesList.scss'

export default class ExpensesList extends Component {

    render() {
        return (
            <div className="ExpensesList">
                <ul>
                    {
                        this.props.expenses.map((expense) => {
                            return (
                                <ol key={expense._id}>
                                    {expense.product + ' - ' + expense.spent}
                                </ol>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}