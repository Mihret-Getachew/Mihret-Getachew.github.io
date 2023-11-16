/**
 *
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 *
 */
export function inArray(arr: number[]): (val: number) => boolean {
  function filter(val: number) {
    return arr.includes(val);
  }

  return filter;
}

/**
 *
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 *
 */
export function inBetween(
  start: number,
  end: number
): (val: number) => boolean {
  function filter(val: number) {
    return val >= start && val <= end;
  }

  return filter;
}
/**
 * @returns {Function} closure that returns it's number
 */

export function closure(num: number): () => number {
  function innerClosure() {
    return num;
  }

  return innerClosure;
}

//army[0](); // the shooter number 0 shows 10
//army[5](); // and number 5 also outputs 10...
