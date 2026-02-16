/*
  Funções utilitárias para manipulação de datas  
*/

export function isExpired(date) {
  const today = new Date();
  const target = new Date(date);
  return target < today;
}

export function formatDateTime(date) {
  const d = new Date(date);
  return d.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
