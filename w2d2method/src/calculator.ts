export const calculator = {
  operand1: 0,
  operand2: 0,
  result: 0,
  setValues: function (num1: number, num2: number) {
    this.operand1 = num1;
    this.operand2 = num2;
  },
  sum: function (): Calculator {
    if (this.result == 0) {
      this.result = this.operand1 + this.operand2;
    }
    this.result = this.result + this.operand2;
    return this;
  },
  mul: function (): Calculator {
    if (this.result == 0) {
      this.result = this.operand1 * this.operand2;
    }

    this.result = this.result * this.operand2;
    return this;
  },
};

interface Calculator {
  operand1: number;
  operand2: number;
  setValues: Function;
  sum: Function;
  mul: Function;
  result: number;
}
// let fruit: string = prompt("Which fruit to buy?", "apple") as string;
// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// console.log(bag.apple);
