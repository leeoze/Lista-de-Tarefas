import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

/*
  Lista responsável apenas por renderizar
  os itens filtrados pelo contexto.
*/
export default function TodoList() {
  const { todos } = useTodos();

  if (!todos.length) {
    return <p className="empty">Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
