import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

const ExpenseTrackerApp = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },
    { id: 2, description: "ab", amount: 11, category: "Utilities" },
    { id: 3, description: "ac", amount: 12, category: "Utilities" },
    { id: 4, description: "ad", amount: 13, category: "Utilities" },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    // setExpenses(
    //   produce(expenses, (draft) => {
    //     const index = draft.findIndex((expense) => expense.id === id);
    //     if (index !== -1) draft.splice(index, 1);
    //   }),
    // );
  };

  return (
    <>
      <ExpenseList expenses={expenses} onDelete={onDelete}></ExpenseList>
    </>
  );
};

export default ExpenseTrackerApp;
