import { useState } from "react";
import { useTodos } from "../context/TodoContext";

/*
  Formulário de criação da tarefa.
  Controla seus próprios estados de input.
*/
export default function TodoForm() {
  const { addTodo } = useTodos();

  const [form, setForm] = useState({
    text: "",
    startDate: "",
    endDate: "",
    color: "#3b82f6"
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.text || !form.startDate || !form.endDate) return;
    addTodo(form);
    setForm({ text: "", startDate: "", endDate: "", color: "#3b82f6" });
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input name="text" placeholder="Descrição da tarefa" value={form.text} onChange={handleChange} />
      <input type="datetime-local" name="startDate" value={form.startDate} onChange={handleChange} />
      <input type="datetime-local" name="endDate" value={form.endDate} onChange={handleChange} />
      <input type="color" name="color" value={form.color} onChange={handleChange} />
      <button type="submit">Criar tarefa</button>
    </form>
  );
}
