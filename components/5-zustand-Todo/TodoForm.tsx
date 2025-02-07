import React, { useState } from "react";
import { useTodoStore } from "./useTodoStore"; // Importiamo Zustand

const TodoForm: React.FC = () => {
  const { addTodo } = useTodoStore();
  const [todo, setTodo] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form className="bg-amber-400 h-35 m-5 p-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full p-2 bg-red-500 rounded"
        placeholder="Enter a new task"
      />
      <button className="bg-indigo-500 m-2 w-24 p-2 rounded" type="submit" disabled={!todo.trim()}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;


