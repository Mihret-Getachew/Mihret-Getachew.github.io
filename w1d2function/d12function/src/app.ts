// import PromptSync from "prompt-sync";

// const prompt = PromptSync();

// function add(a: number, b: number): number {
//   return a + b;
// }
// const sum1: number = add(10, 15);
// const sum2: number = add(9, 5);
// console.log("sum1 is: ", sum1, " sum2 is: ", sum2);
// const x: number = Number(prompt("Enter a number: "));

// console.log(x);
import { computeSalesCommission } from "./commision.js";
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

import { calcDownpayment } from "./costhouse.js";

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));

import { calculateDistance } from "./distance.js";
console.log(calculateDistance(0, 0, 5, 5));

import { calcuateInterest } from "./interest.js";
console.log("expect 110.47", calcuateInterest(100, 10, 1));
console.log("expect 16470.09", calcuateInterest(10000, 5, 10));

import { convertFahrenheit } from "./tempreture.js";
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));

import { SUM } from "./sumdigit.js";
console.log(SUM(1234));
console.log(SUM(102));
console.log(SUM(8));

import { MULTI } from "./multidigit.js";
console.log(MULTI(1234));
console.log(MULTI(102));
console.log(MULTI(8));
