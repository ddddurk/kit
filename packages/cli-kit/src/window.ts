export const window = () => {
  const { columns, rows } = process.stdout;

  return { columns, rows };
};
