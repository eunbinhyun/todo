import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

function App() {
  return (
    <div>
    <TodoList/>
    <TodoForm/>
    </div>
  );
}

export default App;
