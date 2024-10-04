import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import { produce } from "immer";

let id = 5;
const ExpenseTrackerApp = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aa", amount: 10, category: "Utilities" },
    { id: 2, description: "ab", amount: 11, category: "Utilities" },
    { id: 3, description: "ac", amount: 12, category: "Utilities" },
    { id: 4, description: "ad", amount: 13, category: "Utilities" },
  ]);

  const visibleExepnses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    // setExpenses(
    //   produce(expenses, (draft) => {
    //     const index = draft.findIndex((expense) => expense.id === id);
    //     if (index !== -1) draft.splice(index, 1);
    //   }),
    // );
  };

  const addExpense = (expense: any) => {
    setExpenses(
      produce(expenses, (draft) => {
        draft.push({ ...expense, id: expenses.length + 1 });
      }),
    );
  };

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={addExpense}></ExpenseForm>
      </div>
      {/* Expense Filter */}
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList expenses={visibleExepnses} onDelete={onDelete}></ExpenseList>
    </>
  );
};

export default ExpenseTrackerApp;
