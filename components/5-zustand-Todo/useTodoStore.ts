import { create } from "zustand";

// 1️⃣ Definiamo il tipo per un singolo TODO
interface Todo {
  id: number;
  text: string;
}

// 2️⃣ Definiamo il tipo dello store (stato e azioni)
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

// 3️⃣ Creiamo lo store con Zustand
export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { id: Date.now(), text }] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
