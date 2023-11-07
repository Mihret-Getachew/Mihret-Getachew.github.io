// import promptSync from "prompt-sync";
// const prompt = promptSync();

export function convertFahrenheit(temp: number) {
  temp = ((temp - 32) * 5) / 9;
  return temp;
}

let temp = Number(prompt("enter temp"));
