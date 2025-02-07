import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp: React.FC = () => {
  interface Todo {
    id: number;
    text: string;
  }

  const [addTodos, setAddTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text };
    setAddTodos([...addTodos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setAddTodos(addTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-indigo-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-6">My useState Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={addTodos} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default TodoApp;

