import './ExpenseItem.css';
const ExpenseItem = () => {
    const expenseDate = new Date(2021, 11, 12);
    const expenseTitle = "Car insurance";
    const expenseAmount = 300;
    const month = expenseDate.toLocaleString('en-US', { month: 'long' });
    const date = expenseDate.getUTCDate();
    const year = expenseDate.getFullYear();
    console.log("Date : " + date);
    console.log("Month : ", month);
    return (
        <div className='expense-item'>
            <div>
                <div >{month}</div>
                <div>{year}</div>
                <div>{date}</div>
            </div>
            <div className='expense-item__description '>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div></div>
        </div>
    )
}
export default ExpenseItem
