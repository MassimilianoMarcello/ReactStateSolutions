import React, { createContext, useContext, useState } from "react";

// 1️⃣ Definiamo il tipo per un singolo TODO
interface Todo {
  id: number;
  text: string;
}

// 2️⃣ Definiamo il tipo per il nostro Context (stato e funzioni)
interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

// 3️⃣ Creiamo il contesto con un valore iniziale vuoto
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// 4️⃣ Creiamo il Provider che gestisce lo stato globale
export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// 5️⃣ Creiamo un hook personalizzato per usare il contesto
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
