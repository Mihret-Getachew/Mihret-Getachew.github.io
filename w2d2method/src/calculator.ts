export const calculator = {
  operand1: 0,
  operand2: 0,
  setValues: function (num1: number, num2: number) {
    this.operand1 = num1;
    this.operand2 = num2;
  },
  sum: function (): number {
    let sum = this.operand1 + this.operand2;
    return sum;
  },
  mul: function (): number {
    let mul = this.operand1 * this.operand2;
    return mul;
  },
}; // implement this
