import { React, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setNewTitle] = useState("");
  const [amount, setNewAmount] = useState("");
  const [date, setNewDate] = useState("");

  const titleChangeHandler = (e) => {
    setNewTitle(e.target.value);
    console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setNewAmount(e.target.value);
    console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setNewDate(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={date}
            min="2023-01-01"
            max="2030-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.cancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
