import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";

const Expenses = (props) => {
  
    return (
        //     <div className="props.items">
        //      <ExpenseItem 
        //   title = {props..expObj.title}
        //   date={props.expObj.date}
        //   amount= {props.expObj.amount}>
        //   </ExpenseItem> 
        //     </div>

        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                date={props.items[0].date}
                amount={props.items[0].amount}>
            </ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                date={props.items[1].date}
                amount={props.items[1].amount}>
            </ExpenseItem>

            <ExpenseItem
                title={props.items[2].title}
                date={props.items[2].date}
                amount={props.items[2].amount}>
            </ExpenseItem>

            <ExpenseItem
                title={props.items[3].title}
                date={props.items[3].date}
                amount={props.items[3].amount}>
            </ExpenseItem>
        </Card>
    )
}

export default Expenses
