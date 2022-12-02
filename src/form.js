const ERROR = "error"
const curYear = new Date().getFullYear();
console.log(curYear)

const inputElements = document.querySelectorAll(".form-class [name]");
const detailError = document.querySelector(".detail-error")

function onSubmit(event) {
    event.preventDefault();
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
}

function onChange(event) {
    if (event.target.name == "salary" && validateSalary(event.target.value)) {
        event.target.value = showError(event.target, `a valid salary`);
    } else if (event.target.name == "email" && validateEmail(event.target.value)) {
        event.target.value = showError(event.target, `a valid email`);
    } else if (event.target.name = "employee_name" && validateName(event.target.value)) {
        event.target.value = showError(event.target, `a valid name`);
    } else if (event.target.name = "birthDate" && validateBirthDate(event.target.value)) {
        event.target.value = showError(event.target, `a valid birthYear`);
    }
}

function validateBirthDate(birthDate) {
    const arr = birthDate.split("-");
    return +arr[0] < 1950 || +arr[0] > curYear;
}

function validateSalary(salary) {
    return +salary < 1000 || +salary > 40000;
}

function validateEmail(email) {
    return !email.split("").includes("@");
}

function validateName(name) {
    return name.length < 2 || name.length == 0 || name.length > 32;
}

function showError(element, text) {
    element.classList.add(ERROR);
    detailError.textContent = "ERROR: enter " + text;
    setTimeout(function () {
        element.classList.remove(ERROR);
        detailError.textContent = "";
    }, 5000)
    return "";
}
