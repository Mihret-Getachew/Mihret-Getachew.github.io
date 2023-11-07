
import promptSync from "prompt-sync";
const prompt = promptSync();
//while loop
let age = Number(prompt("enter ur age"));
while (age < 18) {
  age = Number(prompt("enter ur age"));
}
//do loop
let agedo = Number(prompt("enter ur age"));
do {
  agedo = Number(prompt("enter ur age"));
} while (agedo < 18);
