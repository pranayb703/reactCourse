import ExpenseDate from './ExpenseDate'
import Card from './Card';
import './ExpenseItem.css';
const ExpenseItem = (props) => {
    const expenseDate = new Date(2021, 11, 12);
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description '>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div></div>
        </Card>
    )
}
export default ExpenseItem
