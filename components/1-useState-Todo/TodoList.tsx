import React from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-center text-indigo-700 mb-4">My Todo List: </h2>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
