export function getNextId(arr) {
    if (arr.length === 0) return 1;
    return Math.max(...arr.map(r => Number(r.id))) + 1;
}