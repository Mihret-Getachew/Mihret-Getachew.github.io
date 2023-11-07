// question 1
function calcuate(isSalaried, amount) {
  let commission = 0;

  if (isSalaried === true) {
    if (amount < 300) {
      commission = 0;
    } else if (amount <= 500 && amount > 300) {
      commission = (amount * 1) / 100;
    } else {
      commission = (amount * 2) / 100;
    }
  } else {
    if (amount > 300 && amount <= 500) {
      commission = (amount * 2) / 100;
    } else {
      commission = (amount * 3) / 100;
    }
  }

  return commission;
}
// question 2a
import promptSync from "prompt-sync";
const prompt = promptSync();
let age = Number(prompt("enter ur age"));
while (age < 18) {
  age = Number(prompt("enter ur age"));
}

let agedo = Number(prompt("enter ur age"));
do {
  agedo = Number(prompt("enter ur age"));
} while (agedo < 18);

// question 3

let amount = Number(prompt("enter amount"));
let rate = Number(prompt("enter rate")) / 100;
let year = Number(prompt("enter year"));
function calcuateInterest(amount, rate, year) {
  for (let x = 1; x < year; x++) {
    let ineterst = rate * amount;
    amount = amount + ineterst;
  }
  console.log(amount);
}
calcuateInterest(amount, rate, year);

// question 4 a
for (let x = 1; x < 6; x++) {
  let str = "";
  for (let j = 1; j < 6; j++) {
    str += j;
  }
  console.log(str);
}
// question 4b
for (let x = 1; x < 6; x++) {
  let str = "";
  for (let j = 1; j <= x; j++) {
    str += x;
  }
  console.log(str);
}
// question 4c
for (let x = 5; x >= 1; x--) {
  let str = "";
  for (let j = 1; j <= x; j++) {
    str += x;
  }
  console.log(str);
}

// question 5

function calculateHousepayment(costofhouse) {
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
}
let costofhouse = prompt("enter cost of house");
calculateHousepayment(costofhouse);

// question 6

let num = Number(prompt("enter number"));

function SUM(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(sum);
}
SUM(num);
