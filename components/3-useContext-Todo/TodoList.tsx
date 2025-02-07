import React from "react";
import { useTodo } from "./TodoContext";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const { todos, removeTodo } = useTodo();

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

