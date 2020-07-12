export default (url: string) => {
  try {
    return new URL(url).origin;
  } catch (e) {
    return undefined;
  }
};
