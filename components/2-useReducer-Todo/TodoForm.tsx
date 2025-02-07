import React from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [todo, setTodo] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <form
      className="bg-amber-400 p-6 rounded-lg shadow-lg flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-full p-3 text-lg bg-white rounded-md shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Enter a new task"
      />
      <button
        className={`w-full p-3 text-lg rounded-md transition-colors duration-200 ${
          todo.trim() ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-400 cursor-not-allowed"
        }`}
        type="submit"
        disabled={!todo.trim()}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
