import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
