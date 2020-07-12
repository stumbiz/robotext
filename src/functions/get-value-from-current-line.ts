export default (currentLine: string) => {
  return currentLine
    .split(':')
    .splice(1, currentLine.split(':').length - 1)
    .join(':')
    .trim();
};
