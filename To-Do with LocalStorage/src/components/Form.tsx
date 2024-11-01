import { useState } from "react";
import { useTodo } from "../contexts/ToDoContext";

function Form() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!todo) return;
    addTodo(todo); // Pass the title as a string
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo} // Bind input value to `todo` state
        onChange={(e) => setTodo(e.target.value)} // Update state on input change
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
