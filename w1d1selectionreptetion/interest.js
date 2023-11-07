// //input
// -intial
// -annual inetest
// -number of year
//   //output
//   -balance at end of year
// //steps
// -get inputs
// -get monthly Intest
// -loop for number of month-year*12
// -add interest to the balance where interest is rate  times balance

import promptSync from "prompt-sync";
const prompt = promptSync();

let amount = Number(prompt("enter amount"));
let rate = Number(prompt("enter rate")) / 100;
let year = Number(prompt("enter year"));

for (let x = 1; x < year; x++) {
  let ineterst = rate * amount;
  amount = amount + ineterst;
}
console.log(amount);
