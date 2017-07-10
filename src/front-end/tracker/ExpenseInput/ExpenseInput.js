import React, {Component} from 'react';

import './ExpenseInput.scss'

export default class ExpenseInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: '',
            spent: 0
        };
    }

    handleInputChange = (event) => {
        const target = event.target;

        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };

    handleAddExpenseClick = () => {
        this.props.handleAddExpense(this.state);
    };

    render() {
        return (
            <div className="ExpenseInput">
                <input type="text" name="product" placeholder="Product" value={this.state.product} onChange={this.handleInputChange}/>
                <input type="number" name="spent" placeholder="Spent" value={this.state.spent} onChange={this.handleInputChange}/>
                <button onClick={this.handleAddExpenseClick}>Add expense</button>
            </div>
        );
    }
}