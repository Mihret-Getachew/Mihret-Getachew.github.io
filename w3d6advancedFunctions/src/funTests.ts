/**
 *
 * @param {*} arr
 * @param {*} func
 * @returns
 */
export function myMap(arr: any, func: Function) {
  //IMPLEMENTATION NEEDED

  let result = [];

  for (const val of arr) {
    result.push(func(val));
  }

  return result;
}

// /**
//  *
//  * @param {*} arr
//  * @param {*} func
//  * @returns
//  */
export function myFilter(arr: any, func: Function) {
  //IMPLEMENTATION NEEDED
  let result = [];

  for (const val of arr) {
    const boolRes = func(val);

    if (boolRes == true) result.push(val);
  }

  return result;
}

// /**
//  *
//  * @param {*} arr
//  * @param {*} func
//  * @param {*} initialValue
//  * @returns
//  */
export function myReduce(arr: any, func: Function, initialValue: any) {
  //IMPLEMENTATION NEEDED

  let res = initialValue;
  for (const val of arr) {
    res = func(res, val);
  }
  return res;
}
