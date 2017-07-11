import {connect} from 'react-redux';
import ExpensesList from './ExpensesList';
import {fetchExpenses} from 'store/expenses';

const mapStateToProps = ({expenses}) => ({expenses: expenses.data});
const mapDispatchToProps = dispatch => ({
    fetchExpenses: () => dispatch(fetchExpenses())
});

const ExpensesListContainer = connect(mapStateToProps, mapDispatchToProps)(ExpensesList);
export default ExpensesListContainer;