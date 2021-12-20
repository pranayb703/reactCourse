import './ExpenseDate.css'; 
const ExpenseDate = (props) => {
    console.log("Props" + JSON.stringify(props.date));

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const date = props.date.getUTCDate();
    const year = props.date.getFullYear();
    return (
            <div className="expense-date">
                <div className="expense-date__month" >{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{date}</div>
            </div>

    )
}

export default ExpenseDate