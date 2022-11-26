import React, { useEffect, useState } from "react";
import { FilterType } from "../../App";
import AddTodo from "../AddTodo/AddTodo";
import Header from "../Header/Header";
import Todo from "../Todo/Todo";
export type TodoItemType = {
  id: string;
  text: string;
  status: string;
};

interface Props {
  filter: FilterType;
}
export default function TodoList({filter}: Props) {
  const [todos, setTodos] = useState<TodoItemType[]>([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);
  const handleAdd = (todo: TodoItemType) => setTodos([...todos, todo]);
  const handleUpdate = (updated: TodoItemType) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted: TodoItemType) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const filtered = getFilteredItems(todos, filter);
 
  return (
    <section>
      <ul>
        {filtered.map((item: TodoItemType) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos: TodoItemType[], filter: FilterType) {
    if (filter === 'all') {
        return todos;
    }
    return todos.filter(todo => todo.status === filter);
} 