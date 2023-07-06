import { React, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [editState, setEditState] = useState();
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditState(false);
  };

  const editStateHandler = () => {
    setEditState(true);
  };

  const cancelExpenseHandler = () => {
    setEditState(false);
  };

  return (
    <div className="new-expense">
      {!editState && (
        <button onClick={editStateHandler}>Add new Expense</button>
      )}
      {editState && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          cancel={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
