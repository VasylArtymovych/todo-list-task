export const inputStyle = (error: boolean, title: string) => {
  if (error && title.length === 0) {
    return '1px solid red';
  }
  return '1px solid black';
};
