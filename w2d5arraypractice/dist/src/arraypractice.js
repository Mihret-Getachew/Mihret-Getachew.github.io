export function doubleNums(arr) {
    return arr.map((num) => num * 2);
}
export function doubleAges(arr) {
    const result = arr.map((person) => {
        return { name: person.name, age: person.age * 2 };
    });
    return result;
}
export function filterEven(arr) {
    return arr.filter((num) => {
        if (num % 2 == 0) {
            return true;
        }
        return false;
    });
}
export function filterOver10(arr) {
    return arr.filter((person) => {
        if (person.age > 10) {
            return true;
        }
        return false;
    });
}
export function findEvenNum(arr) {
    return arr.find((num) => {
        if (num % 2 == 0) {
            return true;
        }
        return false;
    });
}
export function findEvenAge(arr) {
    return arr.find((person) => {
        if (person.age % 2 == 0) {
            return true;
        }
        return false;
    });
}
export function includesEvenNum(arr) {
    for (let elem of arr) {
        if (elem % 2 == 0) {
            return true;
        }
    }
    return false;
}
export function includesEvenAge(arr) {
    for (let elem of arr) {
        if (elem.age % 2 == 0) {
            return true;
        }
    }
    return false;
}
