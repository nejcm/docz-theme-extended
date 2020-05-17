export const isUrl = (str) => {
  try {
    return Boolean(new URL(str));
  }
  catch (e) { return false; }
}