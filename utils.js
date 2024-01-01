export function jsonPr(data, failback) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return failback;
  }
}
