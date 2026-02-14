import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

/*
  Contexto responsável por centralizar
  toda a lógica de estado das tarefas.
*/
export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [filter, setFilter] = useLocalStorage("filter", "all");

  function addTodo(data) {
    setTodos(prev => [
      {
        id: Date.now(),
        status: "pending",
        createdAt: Date.now(),
        ...data
      },
      ...prev
    ]);
  }

  function updateStatus(id, status) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, status } : todo
      )
    );
  }

  function removeTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  /*
    Filtragem + ordenação decrescente centralizada,
    evitando duplicação de lógica nos componentes.
  */
  const filteredTodos = useMemo(() => {
    const ordered = [...todos].sort(
      (a, b) => b.createdAt - a.createdAt
    );

    if (filter === "pending") return ordered.filter(t => t.status === "pending");
    if (filter === "completed") return ordered.filter(t => t.status === "completed");
    if (filter === "cancelled") return ordered.filter(t => t.status === "cancelled");

    return ordered;
  }, [todos, filter]);

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addTodo,
        updateStatus,
        removeTodo,
        filter,
        setFilter
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTodos() {
  return useContext(TodoContext);
}
