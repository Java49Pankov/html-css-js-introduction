function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary) {
    const result = [];
    for (let i = 0; i < nEmployees; i++) {
        const id = getRandomId(idDigits);
        const name = getRandomName(id);
        const birthYear = getBirthYear();
        const salary = getSalary(minSalary, maxSalary);
        const employee = createEmployee(id, name, birthYear, salary);
        result.push(employee);
    }
    return result;
}

function getRandomId(idDigits) {
    let result = '';
    for (let i = 0; i < idDigits; i++) {
        result += getRandomNumber(0, 10);
    }
    return +result;
}

function getRandomName(id) {
    return "name" + id;
}

function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function getBirthYear() {
    return getRandomNumber(1970, 2005);
}

function getSalary(minSalary, maxSalary) {
    return getRandomNumber(minSalary, maxSalary + 1);
}

function createEmployee(id, name, birthYear, salary) {
    return { id, name, birthYear, salary };
}

console.log(createRandomEmployees(5, 4, 10000, 25000));
console.log('----------------------------------');

//---------------------------------------------------------

function getAverageAge(employee) {
    const today = new Date();
    const year = today.getFullYear();
    return employee.reduce((prev, current) => prev + (year - current.year), 0) / employee.length;
}

const employees = [
    { name: 'Vasya', year: 1985 },
    { name: 'John', year: 1999 },
    { name: 'Petya', year: 2002 }
];
console.log(getAverageAge(employees));
console.log("----------------------------------");

//-------------------------------------------------

const empl = createRandomEmployees(7, 1, 5000, 30000);
console.log(empl);

function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    return employees.filter(empl => empl.salary > salaryFrom && empl.salary < salaryTo)
        .sort((a, b) => a.salary - b.salary);
}

console.log("sorted by salary", getEmployeesBySalary(empl, 10000, 20000));
console.log("----------------------------------");

//----------------------------------------------

function increaseSalary(employees, borderSalary, percent) {
    const empls = employees.filter(empl => empl.salary < borderSalary);
    return raiseSalary(empls, percent);
}

function raiseSalary(array, percent) {
    return array.map(({ name, salary }) => {
        return ({ name, salary: salary + ((salary * percent) / 100) });
    });
}
console.log("raise by a percentage", increaseSalary(empl, 15000, 10));