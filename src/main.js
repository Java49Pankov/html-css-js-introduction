
const ACTIVE = "active";

const inputElements = document.querySelectorAll(".form-library [name]");
const sectionElements = document.querySelectorAll("section");
const buttonsMenu = document.querySelectorAll(".menu-button");


function onSubmit(event) {
    event.preventDefault();
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
}

function showBook(index) {
    sectionElements.forEach(section => section.hidden = true);
    buttonsMenu.forEach(button => button.classList.remove(ACTIVE));
    sectionElements[index].hidden = false;
    buttonsMenu[index].classList.add(ACTIVE);
}