export function calculateDistance(x1, y1, x2, y2) {
    let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return d;
}
