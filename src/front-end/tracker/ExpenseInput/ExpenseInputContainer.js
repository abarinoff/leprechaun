import {connect} from 'react-redux';

import {addExpense} from 'store/expenses';
import ExpenseInput from './ExpenseInput';

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddExpense: expense => {
            dispatch(addExpense(expense))
        }
    };
};

const ExpenseInputContainer = connect(null, mapDispatchToProps)(ExpenseInput);
export default ExpenseInputContainer;