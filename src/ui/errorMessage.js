const TIME_OUT = 5000;
const ERROR = "error";

export function showError(element, message, errElement) {
    element.classList.add(ERROR);
    errElement.innerHTML = "ERROR: " + message;
    setTimeout(() => {
        element.classList.remove(ERROR);
        errElement.innerHTML = "";
    }, TIME_OUT)
    return "";
}