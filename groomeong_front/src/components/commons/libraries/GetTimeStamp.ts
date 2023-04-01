export const isSameDate = (date: Date): boolean => {
  const now = new Date();
  const d = new Date(date);

  return d.toLocaleDateString() <= now.toLocaleDateString();
};
