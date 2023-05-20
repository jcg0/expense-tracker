const ExpenseItem = (props) => {
  // const expenseDate = new Date().toLocaleDateString();
  // const expenseTitle = "Rent";
  // const expenseAmount = 1050.0;

  return (
    <div>
      <div>{props.date}</div>
      <div>
        <h2>{props.title}</h2>
        <div>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
