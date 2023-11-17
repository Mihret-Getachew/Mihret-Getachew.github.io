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
export function copyArray(arr) {
    let result = arr.slice();
    return result;
}
export function concat(arr, arr2) {
    let result = arr.concat(arr2);
    return result;
}
export function findMin(...arr) {
    let result = Math.min(...arr);
    return result;
}
export function findMax(...arr) {
    let result = Math.max(...arr);
    return result;
}
export function findProduct(...arr) {
    let result = arr.reduce((product, num) => {
        return (product *= num);
    }, 1);
    return result;
}
