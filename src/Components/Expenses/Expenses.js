import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filteredArr = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  const yearSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeDate={yearSelectHandler}
        />
        <ExpensesList items={filteredArr} />
      </Card>
    </div>
  );
}
