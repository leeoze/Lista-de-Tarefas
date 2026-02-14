/*
  Funções utilitárias para manipulação de datas
  usando apenas APIs nativas do JavaScript.
*/

export function formatDateTime(date) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(new Date(date));
}

export function isExpired(endDate) {
  return new Date() > new Date(endDate);
}
