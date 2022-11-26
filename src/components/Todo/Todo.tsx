import React, { ChangeEvent } from "react";
import { TodoItemType } from "../TodoList/TodoList";
import { FaTrash } from "react-icons/fa";

interface TodoProps {
  key: string;
  todo: TodoItemType;
  onUpdate: (todo: TodoItemType) => void;
  onDelete: (todo: TodoItemType) => void;
}

export default function Todo({ todo, onUpdate, onDelete }: TodoProps) {
  const {text, status} = todo;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input id="checkbox" type="checkbox" checked={status === 'completed'} onChange={handleChange} />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}><FaTrash/></button>
    </li>
  );
}
