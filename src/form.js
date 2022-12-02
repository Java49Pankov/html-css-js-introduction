const ERROR = "error"

const inputElements = document.querySelectorAll(".form-class [name]");
const xxx = document.querySelectorAll(".two-inputs");

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const employee = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(employee)
}

function onChange(event) {
    if (event.target.name == "salary" && validateSalary(event.target.value)) {
        event.target.value = showError(event.target);
    } else if (event.target.name == "email" && validateEmail(event.target.value)) {
        event.target.value = showError(event.target);
    } else if (event.target.name = "employee_name" && validateName(event.target.value)) {
        event.target.value = showError(event.target);
    } else if (event.target.name == "birthDate") {
        const ar = event.target.value.split("-");
        if (ar[0] < 1950 || ar[0] > new Date().getFullYear()) {
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
    setTimeout(function () {
        element.classList.remove(ERROR);
    }, 5000)
    return "";
}






