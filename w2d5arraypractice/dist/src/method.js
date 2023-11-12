/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    return arr.filter((num) => {
        if (num >= a && num <= b) {
            return true;
        }
        return false;
    });
}
export function map2fullName(users) {
    let result = [];
    result = users.map((user) => {
        return { fullName: user.name + " " + user.surname, id: user.id };
    });
    return result;
}
