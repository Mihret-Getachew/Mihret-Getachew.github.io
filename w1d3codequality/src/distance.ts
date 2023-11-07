export function calculateDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return d;
}
