const ERROR = "error"
const curYear = new Date().getFullYear();
const MIN_SALARY = 1000;
const MAX_SALARY = 40000;
const MIN_YEAR = 1950;
const TIME_OUT_ERROR_MESSAGE = 5000;
const ACTIVE_CLASS = "active"
const company = new Company();
let salaryFrom = 0;
let salaryTo = 0;

const inputElements = document.querySelectorAll(".form-class [name]");
const salaryForm = document.querySelectorAll(".salary-form [name]");
const detailError = document.querySelector(".detail-error");
const salaryError = document.querySelector(".salary-error");
const allEmployees = document.querySelector(".all-employees");
const buttonMenu = document.querySelectorAll(".main-button *");
const sectionElements = document.querySelectorAll("section");

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
        event.target.value = showError(event.target,
            `a valid salary. Salary has to be more than ${MIN_SALARY} and less than ${MAX_SALARY}`, detailError);
    } else if (event.target.name == "email" && validateEmail(event.target.value)) {
        event.target.value = showError(event.target, `a valid email`, detailError);
    } else if (event.target.name == "employee_name" && validateName(event.target.value)) {
        event.target.value = showError(event.target, `a valid name`, detailError);
    } else if (event.target.name == "birthDate" && validateBirthDate(event.target.value)) {
        event.target.value = showError(event.target,
            `a valid birthDate. Year has to be more than ${MIN_YEAR} and less than ${curYear}`, detailError);

    } else if (event.target.name == "salaryFrom") {
        salaryFrom = event.target.value;
        if (validateSalaryFrom(event.target.value)) {
            event.target.value = showError(event.target, `salaryFrom= ${salaryFrom} has to be less than ${salaryTo}`, salaryError);
        }
    } else if (event.target.name == "salaryTo") {
        salaryTo = event.target.value;
        if (validateSalaryTo(event.target.value)) {
            salaryTo = event.target.value;
            event.target.value = showError(event.target, `salaryTo= ${salaryTo} has to be less than ${salaryFrom}`, salaryError);
        }
    }
}

function validateSalaryFrom(salFrom) {
    console.log(salFrom)
    return salaryTo && +salFrom >= salaryTo;
}

function validateSalaryTo(salTo) {
    console.log(salTo, salaryFrom)
    return (salaryFrom && +salTo < salaryFrom);
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

function showError(element, text, errorElement) {
    console.log(detailError);
    element.classList.add(ERROR);
    errorElement.textContent = "ERROR: enter " + text;

    setTimeout(function () {
        element.classList.remove(ERROR);
        errorElement.textContent = "";
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
function showButton(index) {
    sectionElements.forEach(section => section.hidden = true);
    buttonMenu.forEach(button => button.classList.remove(ACTIVE_CLASS));
    sectionElements[index].hidden = false;
    buttonMenu[index].classList.add(ACTIVE_CLASS);
    if (index == 1) {
        showEmplButton();
    } else if (index == 2) {
        from = 0;
        to = 0;
    }
}

function showEmplButton() {
    let allEmployee = company.getAllEmployees();
    document.getElementById("empl").innerHTML = allEmployee.map(elem => {
        return getEmployeeBlock(elem);
    }
    );
}

function getEmployeeBlock(employee) {
    return `<div class="detail-block">
    <div class="detail-list">
    <ul>
        <li>Name: ${employee.employee_name}</li>
        <li>Email: ${employee.email}</li>
        <li>Birthdate: ${employee.birthDate}</li>
        <li>Department: ${employee.department}</li>
        <li>Salary: ${employee.salary}</li>
    </ul>
    </div>
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
    let employeeSalary = company.getAllEmployeesBySalary(salaryFrom, salaryTo);
    document.getElementById("empls").innerHTML = employeeSalary.map(elem => {
        return getEmployeeBlock(elem);
    });
}
