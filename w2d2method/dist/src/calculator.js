export const calculator = {
    operand1: 0,
    operand2: 0,
    setValues: function (num1, num2) {
        this.operand1 = num1;
        this.operand2 = num2;
    },
    sum: function () {
        let sum = this.operand1 + this.operand2;
        return sum;
    },
    mul: function () {
        let mul = this.operand1 * this.operand2;
        return mul;
    },
}; // implement this
