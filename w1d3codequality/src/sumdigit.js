// import promptSync from "prompt-sync";
// const prompt = promptSync();
// let num = Number(prompt("enter number"));
export function SUM(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
