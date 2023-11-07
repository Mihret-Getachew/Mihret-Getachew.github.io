import promptSync from "prompt-sync";
const prompt = promptSync();
let num = Number(prompt("enter num"));
let sum = 0;
while (num > 0) {
  sum += num % 10;
  num = Math.floor(num / 10);
}
console.log(sum);
