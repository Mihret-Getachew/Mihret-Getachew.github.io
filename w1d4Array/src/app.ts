console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa: number, b: number, c: number): number {
  //IMPLEMENT THIS -- DO NOT USE MATH.MAX
  let maxNumber;

  if (aa >= b && aa >= c) {
    maxNumber = aa;
  } else if (b >= aa && b >= c) {
    maxNumber = b;
  } else {
    maxNumber = c;
  }
  return maxNumber;
}

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr: number[]): number {
  //IMPLEMENT THIS
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr: number[]): number {
  //IMPLEMENT THIS
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product = product * arr[i];
  }

  return product;
}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */

export function findLongestWord(arr: string[]): number {
  //IMPLEMENT THIS
  let maxLength = arr[0].length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length;
    }
  }

  return maxLength;
}

/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */

/**
 *
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows: number, cols: number): number[][] {
  //IMPLEMENT THIS
  let result: Array<Array<number>> = [];

  let currentNumber = 1;

  for (let i = 0; i < rows; i++) {
    let currentArray: Array<number> = [];
    for (let j = 0; j < cols; j++) {
      currentArray.push(currentNumber++);
    }
    result.push(currentArray);
  }

  return result;
}

/**
 *
 * @param {*} studentAnswers student answers
 * @param {*} correctAnswers correct answers
 * @returns {Array} checked answers
 */

export function scoreExams(
  studentAnswers: Array<Array<number>>,
  correctAnswers: Array<number>
): Array<number> {
  let results: Array<number> = [];
  for (let i = 0; i < studentAnswers.length; i++) {
    let correctAnswersCount = 0;
    for (let j = 0; j < correctAnswers.length; j++) {
      if (studentAnswers[i][j] === correctAnswers[j]) {
        correctAnswersCount++;
      }
    }

    results.push(correctAnswersCount);
  }

  return results;
}

/**
 *
 * @param {*} arr given list of numbers
 * @returns {Array} list of reversed number
 */
export function reverse(arr: Array<number>): Array<number> {
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result;
}

/**
 *
 * @param {*} arr given list of numbers
 * @returns {Array} list of reversed number
 */
export function reverseArrayInPlace(arr: Array<number>): Array<number> {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}
// let arr = ["i", "m", "n"];

// function arrayFun(arr: string[]): number {
//   let count = 0;
//   for (let elem of arr) {
//     console.log(elem);
//     count++;
//   }
//   return count;
// }
// console.log(arrayFun(arr));
