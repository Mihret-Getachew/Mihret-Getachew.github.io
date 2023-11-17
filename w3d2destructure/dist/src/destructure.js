/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
export function topSalary(salaries) {
    let values = Object.entries(salaries);
    if (values.length == 0)
        return "none";
    console.log(values);
    let maxName = values[0][0];
    let maxSalary = values[0][1];
    for (const [name, salary] of values) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }
    return maxName;
}
