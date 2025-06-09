import { Button } from "@/components/ui/button";
import { useCallback, useMemo, useState } from "react";

export const MemoHook = () => {
  const [date, setDate] = useState(new Date());
  const [state, setState] = useState(0);
  
  const formatDate = useCallback(() => {
    console.log("formatou a data");

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }, [date])

  const formattedDate = useMemo(() => {
    return formatDate()
  }, [formatDate]);

  function handlePlus() {
    setState((prev) => prev + 1);
  }

  function handleMinus() {
    setState((prev) => prev - 1);
  }

  return (
    <>
      <div className="space-x-1">{formattedDate}</div>
      <Button onClick={() => setDate(new Date())}>Atualizar data</Button>

      <div>
        <h1>Counter: {state}</h1>
        <div className="space-x-1">
          <Button onClick={handlePlus}>+</Button>
          <Button onClick={handleMinus}>-</Button>
        </div>
      </div>
    </>
  );
};
