export const isSameDate = (date: Date): boolean => {
  const now = new Date();
  const d = new Date(date);

  return (
    now.getFullYear() >= d.getFullYear() &&
    now.getMonth() >= d.getMonth() &&
    now.getDate() > d.getDate()
  );
};
