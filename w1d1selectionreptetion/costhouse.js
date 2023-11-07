import promptSync from "prompt-sync";
const prompt = promptSync();
let costofhouse = prompt("enter cost of house");
let downPayment = 0;
if (costofhouse == 0 && costofhouse < 50000) {
  downPayment = (costofhouse * 5) / 100;
} else if (costofhouse > 50000 && costofhouse < 100000) {
  downPayment = 1000 + (10 / 100) * (costofhouse - 50000);
} else if (costofhouse > 100000 && costofhouse < 200000) {
  downPayment = 2000 + (15 / 100) * (costofhouse - 100000);
} else {
  downPayment = 5000 + (10 / 100) * (costofhouse - 200000);
}

console.log(downPayment);
