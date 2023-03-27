import { Dispatch, SetStateAction, useState } from "react";

interface IuseSetAuthInterval {
  setTime: Dispatch<SetStateAction<number>>;
  time: number;
  setIntervalHooks: (sec?: number) => void;
  clearIntervalId?: NodeJS.Timer;
}

export const useSetAuthInterval = (t?: number): IuseSetAuthInterval => {
  const [time, setTime] = useState<number>(t ?? 180);
  const [clearIntervalId, setClearIntervalId] = useState<NodeJS.Timer>();

  const setIntervalHooks = (sec?: number): void => {
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
