// question 3
// let amount = Number(prompt("enter amount"));
// let rate = Number(prompt("enter rate")) / 100;
// let year = Number(prompt("enter year"));
export function calcuateInterest(initialAmount, annualRate, yearToCompound) {
    let monthlyRate = annualRate / 12 / 100;
    let monthlyToCompound = yearToCompound * 12;
    let balanceSavingsAccount = initialAmount;
    for (let x = 0; x < monthlyToCompound; x++) {
        balanceSavingsAccount += balanceSavingsAccount * monthlyRate;
    }
    return balanceSavingsAccount;
}
