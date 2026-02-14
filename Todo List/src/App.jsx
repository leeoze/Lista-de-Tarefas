import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <TodoProvider>
      <main className="container">
        <h1>Gerenciador de Tarefas</h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </main>
    </TodoProvider>
  );
}
