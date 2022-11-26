import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from '../Todo/Todo';
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
  const handleUpdate = (updated: TodoItemType) => {
    setTodos(todos.map(todo => todo.id === updated.id ? updated : todo));
  }
  const handleDelete = (deleted: TodoItemType) => {
    setTodos(todos.filter(todo => todo.id !== deleted.id));
  }

  useEffect(() => {
    console.log(todos, 'todos')
  }, [todos])
  return (
    <section>
      <ul>
        {todos.map((item: TodoItemType) => (
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
