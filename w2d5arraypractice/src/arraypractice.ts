export type Person = {
  name: string;
  age: number;
};

export function doubleNums(arr: number[]) {
  return arr.map((num) => num * 2);
}

export function doubleAges(arr: Person[]): Person[] {
  const result: Person[] = arr.map((person: Person) => {
    return { name: person.name, age: person.age * 2 };
  });
  return result;
}

export function filterEven(arr: number[]) {
  return arr.filter((num: number) => {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  });
}

export function filterOver10(arr: Person[]) {
  return arr.filter((person: Person) => {
    if (person.age > 10) {
      return true;
    }
    return false;
  });
}

export function findEvenNum(arr: number[]) {
  return arr.find((num: number) => {
    if (num % 2 == 0) {
      return true;
    }
    return false;
  });
}

export function findEvenAge(arr: Person[]) {
  return arr.find((person: Person) => {
    if (person.age % 2 == 0) {
      return true;
    }
    return false;
  });
}

export function includesEvenNum(arr: number[]) {
  for (let elem of arr) {
    if (elem % 2 == 0) {
      return true;
    }
  }
  return false;
}

export function includesEvenAge(arr: Person[]) {
  for (let elem of arr) {
    if (elem.age % 2 == 0) {
      return true;
    }
  }
  return false;
}
