import { useState } from "react";

export const useSetAuthInterval = (t?: number) => {
  const [time, setTime] = useState<number>(t ?? 180);
  const [clearIntervalId, setClearIntervalId] = useState<NodeJS.Timer>();

  const setIntervalHooks = (sec?: number) => {
    if (sec !== undefined) setTime(sec);

    const id = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    setClearIntervalId(id);
  };

  return {
    setTime,
    time,
    setIntervalHooks,
    clearIntervalId,
  };
};
