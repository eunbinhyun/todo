import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
export type TodoItemType = {
    id: string;
    text: string;
    status: string;
  };

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemType[]>([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);
  const handleAdd = (todo: TodoItemType) => setTodos([...todos, todo]);
  return (
    <section>
      <ul>
        {todos.map((item: TodoItemType) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
