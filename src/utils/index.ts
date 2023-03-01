export const titleInputStyle = (error: boolean, title: string) => {
  if (error && title.length === 0) {
    return '1px solid red';
  }
  return '1px solid black';
};

export const descrInputStyle = (error: boolean, text: string) => {
  if (error && text.length === 0) {
    return '1px solid red';
  }
  return '1px solid black';
};
