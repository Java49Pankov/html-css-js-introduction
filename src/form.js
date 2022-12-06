const ERROR = "error"
const curYear = new Date().getFullYear();
const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;
const TIME_OUT_ERROR_MESSAGE = 5000;
const company = new Company();
const SALARYFROM = 1500;
const SALARYTO = 10000;

const inputElements = document.querySelectorAll(".form-class [name]");
const salaryForm = document.querySelectorAll(".salary-form [name]");
const detailError = document.querySelector(".detail-error");
const allEmployees = document.querySelector(".all-employees");

function onSubmit(event) {
    event.preventDefault();
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    company.hireEmployee(employee);

}



function onChange(event) {
    if (event.target.name == "salary" && validateSalary(event.target.value)) {
        event.target.value = showError(event.target, `a valid salary`);
    } else if (event.target.name == "email" && validateEmail(event.target.value)) {
        event.target.value = showError(event.target, `a valid email`);
    } else if (event.target.name == "employee_name" && validateName(event.target.value)) {
        event.target.value = showError(event.target, `a valid name`);
    } else if (event.target.name == "birthDate" && validateBirthDate(event.target.value)) {
        event.target.value = showError(event.target, `a valid birthYear`);
    }
}

function validateBirthDate(birthDate) {
    const arr = birthDate.split("-");
    return +arr[0] < MIN_YEAR || +arr[0] > curYear;
}

function validateSalary(salary) {
    return +salary < MIN_SALARY || +salary > MAX_SALARY;
}

function validateEmail(email) {
    return !email.split("").includes("@");
}

function validateName(name) {
    return name.length < 2 || name.length == 0 || name.length > 16;
}

function showError(element, text) {
    element.classList.add(ERROR);
    detailError.textContent = "ERROR: enter " + text;
    setTimeout(function () {
        element.classList.remove(ERROR);
        detailError.textContent = "";
    }, TIME_OUT_ERROR_MESSAGE)
    return "";
}

function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function (employee) {
    this.employees.push(employee);
}

Company.prototype.getAllEmployees = function () {
    return this.employees;
}

Company.prototype.getAllEmployeesBySalary = function (salaryFrom, salaryTo) {
    return getSomethingBySalary(this.employees, salaryFrom, salaryTo)

}

function show() {
    let allEmployee = company.getAllEmployees();
    console.log(allEmployee);
    document.getElementById("empl").innerHTML = allEmployee.map(e => {
        return getEmployeeBlock(e);
    }
    );
}

function getEmployeeBlock(employee) {
    return `<div class="detail-block">
    <ul>
        <li>Name: ${employee.employee_name}</li>
        <li>Email: ${employee.email}</li>
        <li>Birthdate: ${employee.birthDate}</li>
        <li>Department: ${employee.department}</li>
        <li>Salary: ${employee.salary}</li>
    </ul>
</div>`;
}

function getSomethingBySalary(employees, salaryFrom, salaryTo) {
    const employeesBySalary = employees.filter(empl => empl.salary >= salaryFrom
        && empl.salary <= salaryTo);
    return employeesBySalary;
}
function showBySalary(event) {
    event.preventDefault();
    const salaryFrom = salaryForm[0].value;
    const salaryTo = salaryForm[1].value;
    console.log(salaryForm, salaryFrom, salaryTo);
    let employeeSalary = company.getAllEmployeesBySalary(salaryFrom, salaryTo);
    document.getElementById("empl").innerHTML = employeeSalary.map(e => {
        return getEmployeeBlock(e);
    }
    );
}