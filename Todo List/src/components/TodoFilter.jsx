import { useTodos } from "../context/TodoContext";

/*
  Filtros de visualização das tarefas.
*/
export default function TodoFilter() {
  const { filter, setFilter } = useTodos();

  const options = [
    { key: "all", label: "Todas" },
    { key: "pending", label: "Pendentes" },
    { key: "completed", label: "Concluídas" },
    { key: "cancelled", label: "Canceladas" }
  ];

  return (
    <div className="filters">
      {options.map(opt => (
        <button
          key={opt.key}
          className={filter === opt.key ? "active" : ""}
          onClick={() => setFilter(opt.key)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
