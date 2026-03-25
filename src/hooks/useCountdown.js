import { useEffect, useState } from "react";

/*
  Hook responsável pelo cronômetro regressivo.
  Ele atualiza o tempo restante a cada segundo
  e é interrompido automaticamente quando necessário.
*/
export function useCountdown(endDate, active) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!active) return;

    function update() {
      const diff = new Date(endDate) - new Date();

      if (diff <= 0) {
        setTimeLeft("Prazo expirado");
        return;
      }

      const hours = Math.floor(diff / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [endDate, active]);

  return timeLeft;
}
