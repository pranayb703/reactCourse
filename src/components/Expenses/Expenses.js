import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');

    

    const expenseFilterOption = (option) => {
        console.log("Expense filter option logged : " , option);
        setSelectedYear(option);
    }
    return (
        
        //     <div className="props.items">
        //      <ExpenseItem 
        //   title = {props..expObj.title}
        //   date={props.expObj.date}
        //   amount= {props.expObj.amount}>
        //   </ExpenseItem> 
        //     </div>
        <div>
            
            <Card className="expenses">
            <ExpensesFilter onExpenseFilter={expenseFilterOption} filteredYear={selectedYear}/>
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
        </div>
    )
}

export default Expenses
