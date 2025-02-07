import React from "react";
import { useTodoStore } from "./useTodoStore"; // Importiamo Zustand
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { todos, removeTodo } = useTodoStore();

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;


