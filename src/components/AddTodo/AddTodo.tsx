import React, { ChangeEvent, FormEvent, FormEventHandler, useRef, useState } from 'react';
import { TodoItemType } from '../TodoList/TodoList';


export default function AddTodo({onAdd}: {onAdd: (item: TodoItemType) => void}) {
    const [text, setText] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      console.log(text ,' text')
      e.preventDefault();
      if (text.trim().length === 0) {
        return;
      }
      onAdd({id: new Date().toString(), text, status: 'active'});
      setText('');
    }

    return (
      <form onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Add Todo' 
        value={text}
        onChange={handleChange}
        />
        <button
        >
          Add
        </button>
      </form>
    );
}

