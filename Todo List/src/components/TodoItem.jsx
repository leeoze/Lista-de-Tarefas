import { memo } from "react";
import { useTodos } from "../context/TodoContext";
import { useCountdown } from "../hooks/useCountdown";
import { formatDateTime, isExpired } from "../utils/dateUtils";

/*
  Item individual da lista.
  Possui cronômetro, datas, status e ações.
*/
function TodoItem({ todo }) {
  const { updateStatus, removeTodo } = useTodos();

  const expired = isExpired(todo.endDate);
  const timeLeft = useCountdown(
    todo.endDate,
    todo.status === "pending"
  );

  /*
    Função genérica de confirmação.
    Garante segurança antes de ações destrutivas.
  */
  function confirmAction(message, action) {
    if (window.confirm(message)) {
      action();
    }
  }

  return (
    <li
      className={`todo-item ${todo.status}`}
      style={{
        borderLeft: `6px solid ${todo.color}`,
        color: expired ? "red" : "inherit"
      }}
    >
      <div className="content">
        <strong>{todo.text}</strong>

        <span>
          Início: {formatDateTime(todo.startDate)}
        </span>

        <span>
          Fim: {formatDateTime(todo.endDate)}
        </span>

        <small>{timeLeft}</small>
      </div>

      <div className="actions">
        {todo.status === "pending" && (
          <>
            <button
              onClick={() =>
                confirmAction(
                  "Deseja concluir esta tarefa?",
                  () => updateStatus(todo.id, "completed")
                )
              }
            >
              Concluir
            </button>

            <button
              onClick={() =>
                confirmAction(
                  "Deseja cancelar esta tarefa?",
                  () => updateStatus(todo.id, "cancelled")
                )
              }
            >
              Cancelar
            </button>
          </>
        )}

        <button
          className="remove"
          onClick={() =>
            confirmAction(
              "Deseja remover esta tarefa?",
              () => removeTodo(todo.id)
            )
          }
        >
          Remover
        </button>
      </div>
    </li>
  );
}

export default memo(TodoItem);
