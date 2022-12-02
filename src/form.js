const ERROR = "error"
const curYear = new Date().getFullYear();
console.log(curYear);
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
        event.target.value = showError(event.target);
    } else if (event.target.name == "email" && validateEmail(event.target.value)) {
        event.target.value = showError(event.target);
    } else if (event.target.name = "employee_name" && validateName(event.target.value)) {
        event.target.value = showError(event.target);
    } else if (event.target.name == "birthDate") {
        const arr = (event.target.value).split("-");
        if (arr[0] < 1950 || arr[0] > curYear) {
            event.target.value = showError(event.target);
        }
    }
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

function showError(element) {
    element.classList.add(ERROR);
    detailError.textContent = "wrong input";
    setTimeout(function () {
        element.classList.remove(ERROR);
        detailError.textContent = "";
    }, 5000)
    return "";
}
