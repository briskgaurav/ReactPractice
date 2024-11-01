import { createContext, useContext } from "react";

export const todoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Task 1",
      completed: false,
    },
  ],
  addTodo:(title: string) => {},
  removeTodo: (id:number) => {},
  toggleTodo: (id:number) => {},
  updateTodo: (id:number, title:string) => {},
});

//customHook for TODOs

export const useTodo = () => {
  return useContext(todoContext);
};

export const TodoProvider = todoContext.Provider;
