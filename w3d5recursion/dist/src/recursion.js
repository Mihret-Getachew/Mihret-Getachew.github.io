export { sumTo, factorial, fibonacci, outputList, outputListLoop,
//   sumTreeValues,
 };
function factorial(n) {
    if (n == 1)
        return 1;
    return n * factorial(n - 1);
}
function sumTo(num) {
    if (num == 1)
        return 1;
    return num + sumTo(num - 1);
}
function fibonacci(num) {
    if (num <= 1)
        return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
function outputList(obj) {
    if (obj == null)
        return "printed to console";
    return obj.value + "" + outputList(obj.next);
}
function outputListLoop(obj) {
    let res = "";
    while (obj != null) {
        let { next, value } = obj;
        res += value;
        obj = next;
    }
    res += "printed to console";
    return res;
}
