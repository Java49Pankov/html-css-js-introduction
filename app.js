function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary };
}

const empl1 = createEmployee(123, "Vasya", 2000, 10000);
const empl2 = createEmployee(123, "Vasya", 2000, 10000);
console.log(empl1 == empl2);

function updateSalary(empl, newSalary) {
    empl.salary = newSalary;
}
updateSalary(empl1, 15000);
console.log(empl2);

const empl3 = createEmployee(123, "Vasya", 2000, 10000);
const empl4 = empl3;
console.log(empl3 == empl4);
updateSalary(empl3, 15000);
console.log(empl4);

function updateSalaryPrimitive(salary, newSalary) {
    salary = newSalary;
}
let salary = 10000;
updateSalaryPrimitive(salary, 20000);
console.log("salary = ", salary);
