import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";

export type FilterType = "all" | "active" | "completed";
const filters: FilterType[] = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState<FilterType>(filters[0]);
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
