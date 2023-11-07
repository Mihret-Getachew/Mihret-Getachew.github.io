export function double(num) {
    return 2 * num;
}
export function times100(num) {
    let x = num * 100;
    return x;
}
export function myMap(arr, func) {
    let newArr = [];
    for (let elem of arr) {
        newArr.push(func(elem));
    }
    return newArr;
}
// let anoyFunc = (num: number) => {
//   let x = num * num;
//   return x;
// };
// let anoyFunc2 = function (num: number) {
// }
// console.log(anoyFunc(100));
