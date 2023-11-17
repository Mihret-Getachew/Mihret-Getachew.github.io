/*
a)	Copy an array
b)	Concatenate arrays into a new array
c)	Concatenate an array and a new array element
d)	Use an array as arguments
e)	Use Math.min and Math.max
f)	Use rest operator in function calls
You will need to use generic typing for copyArray and concat.   copyArray generic typing is given below.
Do the same pattern for concat.
*/

export function copyArray<T>(arr: T[]): T[] {
  let result = arr.slice();
  return result;
}
export function concat<T>(arr: T[], arr2: T[]): T[] {
  let result = arr.concat(arr2);
  return result;
}
export function findMin(...arr: number[]): number {
  let result = Math.min(...arr);
  return result;
}
export function findMax(...arr: number[]): number {
  let result = Math.max(...arr);
  return result;
}
export function findProduct(...arr: number[]): number {
  let result = arr.reduce((product, num) => {
    return (product *= num);
  }, 1);
  return result;
}
