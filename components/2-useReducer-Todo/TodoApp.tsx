import React, { useReducer } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Definisci i tipi di stato e le azioni
interface Todo {
  id: number;
  text: string;
}

// Tipi di azioni possibili
type Action =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'REMOVE_TODO'; id: number };

// Stato iniziale
const initialState: Todo[] = [];

// Reducer
const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo: Todo = { id: Date.now(), text: action.text };
      return [...state, newTodo];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
      
  }
};

const TodoApp: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  // Funzione per aggiungere un todo
  const addTodo = (text: string) => {
    dispatch({ type: 'ADD_TODO', text });
  };

  // Funzione per rimuovere un todo
  const removeTodo = (id: number) => {
    dispatch({ type: 'REMOVE_TODO', id });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 to-indigo-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-6">My useReducer Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
