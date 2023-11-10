/**
 *
 * @param {*} str
 */
export function ucFirst(str) {
    if (str === "") {
        return "";
    }
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i == 0) {
            newStr += str[i].toUpperCase();
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}
/**
 *
 * @param {*} str
 */
export function checkSpam(str) {
    if (str.includes("ViAgRA") || str.includes("free xxxxx")) {
        return true;
    }
    return false;
}
/**
 *
 * @param {*} str
 * @param {*} maxlength
 */
export function truncate(str, maxlength) {
    let newStr = "";
    newStr += str.slice(0, maxlength);
    if (newStr.length != str.length)
        newStr += "...";
    return newStr;
}
/**
*
* @param {Array} arr of numbers
* @returns {number} the total of the maximal subarray

*/
export function getMaxSubSum(arr) {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
export function camelize(str) {
    if (str === "") {
        return "";
    }
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "-") {
            newStr += str[i];
        }
        else {
            i++;
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}
export function extractCurrencyValue(str) {
    str = str.replace("$", "");
    return +str;
}
