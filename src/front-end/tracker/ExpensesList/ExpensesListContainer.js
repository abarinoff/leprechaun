import {connect} from 'react-redux';
import ExpensesList from './ExpensesList';

const mapStateToProps = ({expenses}) => ({expenses});

const ExpensesListContainer = connect(mapStateToProps, null)(ExpensesList);

export default ExpensesListContainer;