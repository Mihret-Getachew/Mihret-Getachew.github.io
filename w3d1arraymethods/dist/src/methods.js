/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr, a, b) {
    return arr.filter((element) => element >= a && element <= b);
}
/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
The function should only modify the array. It should not return anything.
*/
export function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
export const calculator = {
    methods: {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    },
    calculate: function (str) {
        const values = str.split(" ");
        const method = values[1];
        const a = Number(values[0]);
        const b = Number(values[2]);
        return this.methods[method](a, b);
    },
    addMethod: function (name, func) {
        this.methods[name] = func;
    },
};
export function unique(arr) {
    return [];
}
export function groupById(users) {
    const usersById = {};
    for (const user of users) {
        usersById[user.id] = user;
    }
    return usersById;
}
export function map2fullName(users) {
    let result = users.map((user) => {
        return { fullName: `${user.name + " " + user.surname}`, id: user.id };
    });
    return result;
}
export function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}
export function findOldest(users) {
    let oldest = users[0];
    for (const user of users) {
        if (user.age > oldest.age) {
            oldest = user;
        }
    }
    return oldest;
}
/* getAverageAge using reduce */
export function getAverageAge(users) {
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}
