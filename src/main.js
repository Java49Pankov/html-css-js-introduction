import { Library } from "./data/library.js";
const ACTIVE = "active";
const ERROR = "error";
const minDate = new Date("1980-01-01");
const todayDate = new Date();
const TIME_OUT = 5000;
const MIN_RANGE = 50;
const MAX_RANGE = 2000;
let pagesFrom = 0;
let pagesTo = 0;
const library = new Library();


const inputElements = document.querySelectorAll(".form-library [name]");
const inputElementAuthor = document.querySelectorAll(".form-author [name]");
const inputElementPages = document.querySelectorAll(".form-range-pages [name]");
const sectionElement = document.querySelectorAll("section");
const buttonsMenu = document.querySelectorAll(".main-button *");
const errorMessage = document.querySelector(".error-message");
const errorPageMessage =document.querySelector(".error-pages-message")


//----------------------------------------------------
function onSubmit(event) {
    event.preventDefault();
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    library.addBook(book);
}

function showBook(index) {
    sectionElement.forEach(section => section.hidden = true);
    buttonsMenu.forEach(button => button.classList.remove(ACTIVE));
    sectionElement[index].hidden = false;
    buttonsMenu[index].classList.add(ACTIVE);
    if (index == 1) {
        showAllBooks();
    }
}

function showError(element, message, errElement) {
    element.classList.add(ERROR);
    errElement.innerHTML = "ERROR: " + message;
    setTimeout(() => {
        element.classList.remove(ERROR);
        errElement.innerHTML = "";
    }, TIME_OUT)
    return "";
}

function getBooks(book) {
    return book.map(value => `<div class="detail-list">
    <ul>
        <li>title: ${value.book_title}</li>
        <li>author: ${value.author}</li>
        <li>genre: ${value.genre}</li>
        <li>date: ${value.publishingDate}</li>
        <li>pages: ${value.pages}</li>
    </ul>
    </div>`);
}
//-----------------------------------------------------------------------------

function onChange(event) {
    if (event.target.name == "publishingDate") {
        validatePublishing(event.target);
    } else if (event.target.name == "pages") {
        validatePages(event.target);
    }
}

function validatePublishing(datePublic) {
    const targeDate = new Date(datePublic.value);
    if (targeDate < minDate || targeDate > todayDate) {
        const message = targeDate < minDate ? `publication date must be greater than ${minDate}` :
            `publication date must be less than ${todayDate}`;
        showError(datePublic, message, errorMessage);
    }
}

function validatePages(pagesRange) {
    const pages = pagesRange.value;
    if (pages < MIN_RANGE || pages > MAX_RANGE) {
        const message = pages < MIN_RANGE ? `publication page ranges must be greater than ${MIN_RANGE}` :
            `publication page ranges must be less than ${MAX_RANGE}`;
        showError(pagesRange, message, errorMessage);
    }
}

//-----------------------------------------------------------------------------------------
function showAllBooks() {
    let allBooks = library.getAllBooks();
    document.getElementById("all-books").innerHTML = getBooks(allBooks);
}


//--------------------------------------------------------------------------

function getSearchAuthor(books, author) {
    const filterAuthor = books.filter(a => a.author == author);
    return filterAuthor;

}

function onSubmitAuthor(even) {
    even.preventDefault();
    const author = Array.from(inputElementAuthor)[0].value;
    const books = library.getAuthorBooks(author);
    document.getElementById("author-books").innerHTML = getBooks(books);
}

//-------------------------------------------------

function getSearchPages(books, pagesFrom, pagesTo) {
    const filterPages = books.filter(pages => pages.pages >= pagesFrom
        && pages.pages <= pagesTo);
    return filterPages;
}

function onSubmitPages(even) {
    even.preventDefault();
    const pageFrom = inputElementPages[0].value;
    const pageTo = inputElementPages[1].value;
    const pages = library.getRangePages(pageFrom, pageTo);
    document.getElementById("range-pages").innerHTML = getBooks(pages);
}

function onChangePages(event) {
    if (event.target.name == "pagesFrom") {
        pagesFrom = event.target.value;
        if (validatePageFrom(event.target.value)) {
            event.target.value = showError(event.target,
                `pageFrom= ${pagesFrom} has to be less than ${pagesTo}`, errorPageMessage);
        }
    } else if (event.target.name == "pagesTo") {
        pagesTo = event.target.value;
    } if (validatePagesTo(event.target.value)) {
        event.target.value = showError(event.target,
            `pageTo= ${pagesTo} has to be less than ${pagesFrom}`, errorPageMessage);
    }
}

function validatePageFrom(pageFrom) {
    console.log(pageFrom)
    return pagesTo && +pageFrom >= pagesTo;
}

function validatePagesTo(pageTo) {
    return pagesFrom && +pageTo < pagesFrom;
}

window.onSubmit = onSubmit;
window.onChange = onChange;
window.showBook = showBook;
window.getBooks = getBooks;
window.showAllBooks = showAllBooks;
window.getSearchAuthor = getSearchAuthor;
window.onSubmitAuthor = onSubmitAuthor;
window.getSearchPages = getSearchPages;
window.onSubmitPages = onSubmitPages;
window.onChangePages = onChangePages;
