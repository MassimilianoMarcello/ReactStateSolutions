import React from 'react';

interface Todo {
  id: number;
  text: string;
}

const TodoItem: React.FC<{ todo: Todo; removeTodo: (id: number) => void }> = ({ todo, removeTodo }) => {
  return (
    <li className="flex justify-between items-center bg-white p-4 mb-3 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all">
      <p className="text-gray-700 text-lg font-medium">{todo.text}</p>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 focus:outline-none transition-colors"
        onClick={() => removeTodo(todo.id)}
      >
        🗑️
      </button>
    </li>
  );
};

export default TodoItem;
