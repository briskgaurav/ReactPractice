import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts/ToDoContext";
import Form from "./components/Form";
import Itembox from "./components/Itembox";

function App() {

  interface Todo {
    id: number;
    title: string;
    completed: boolean;  // Remove the optional '?' and make it required
  }

  const [todos, setTodos] = useState<Todo[]>([]);

  // Add Funct
   const addTodo = (todo: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), title: todo, completed: false }]);
  };
  // Update Todo
  const updateTodo = (id: number, todo: string) => {
    setTodos((prev) =>
      prev.map((singleTodo) =>
        singleTodo.id === id ? { ...singleTodo, title: todo } : singleTodo
      )
    );
  };

  // del todos
  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((single) => single.id !== id));
  };

  const delAllTodos = ()=>{
    setTodos([]); 
  }

  // toggle todo

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((single) =>
        single.id === id ? { ...single, completed: !single.completed } : single
      )
    );
  };

  // Local Storage Logixs:

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        const todos = JSON.parse(storedTodos);
        if (todos?.length > 0) {
            setTodos(todos);
        }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, toggleTodo, updateTodo, removeTodo, addTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <Form />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                 <Itembox todo={todo} />

              </div>
            ))}
          </div>
        </div>
      <button onClick={delAllTodos} className="absolute text-white bottom-[5%] left-10  px-8 py-2 rounded-md bg-purple-500 w-[10%]"> Delete All Tasks</button>

      </div>
    </TodoProvider>
  );
}

export default App;
