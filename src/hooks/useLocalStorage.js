import { useEffect, useState } from "react";

/*
  Hook responsável por persistir qualquer estado no localStorage.
  Ele garante que os dados sejam restaurados ao recarregar a página.
*/
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
