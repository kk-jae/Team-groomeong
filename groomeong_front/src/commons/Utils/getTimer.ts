export const getTimer = (t: number) => {
  if (t >= 0) {
    const min = Math.floor(t / 60);
    const sec = String(Math.floor(t % 60)).padStart(2, "0");
    return `${min}:${sec}`;
  }
};
