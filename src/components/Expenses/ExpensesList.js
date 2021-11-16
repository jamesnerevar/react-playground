import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found.</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((filteredExpense) => (
          <ExpenseItem
            key={filteredExpense.id}
            title={filteredExpense.title}
            amount={filteredExpense.amount}
            date={filteredExpense.date}
          />
        ))}
        ;
      </ul>
    );
  }
};

export default ExpensesList;
