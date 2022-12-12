import { Library } from "./data/library.js";
import { BookForm } from "./ui/bookForm.js";
import { showError } from "./ui/errorMessage.js";

const ACTIVE = "active";
const MIN_DATE = new Date("1980-01-01");
const TODAY_DATE = new Date();
const MIN_RANGE = 50;
const MAX_RANGE = 2000;
let pagesFrom = 0;
let pagesTo = 0;

const library = new Library();

const inputElementAuthor = document.querySelectorAll(".form-author [name]");
const inputElementPages = document.querySelectorAll(".form-range-pages [name]");
const sectionElement = document.querySelectorAll("section");
const buttonsMenu = document.querySelectorAll(".main-button *");
const errorPageMessage = document.querySelector(".error-pages-message")

const bookForm = new BookForm({
    idForm: "book_form", idDateInput: "date_input",
    idPageInput: "page_input", idDateError: "date_error", idPageError: "page_error",
    minDate: MIN_DATE, todayDate: TODAY_DATE, min_range: MIN_RANGE, max_range: MAX_RANGE
})

bookForm.addSubmitHandler((book) => library.addBook(book))

function showBook(index) {
    sectionElement.forEach(section => section.hidden = true);
    buttonsMenu.forEach(button => button.classList.remove(ACTIVE));
    sectionElement[index].hidden = false;
    buttonsMenu[index].classList.add(ACTIVE);
    if (index == 1) {
        showAllBooks();
    }
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

//------------------------------------------------------------------

function showAllBooks() {
    let allBooks = library.getAllBooks();
    document.getElementById("all-books").innerHTML = getBooks(allBooks);
}

//------------------------------------------------------------------
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
        if (pagesTo && +pagesFrom >= pagesTo) {
            event.target.value = showError(event.target,
                `pageFrom= ${pagesFrom} has to be less than ${pagesTo}`, errorPageMessage);
        }
    } else if (event.target.name == "pagesTo") {
        pagesTo = event.target.value;
        if (pagesFrom && +pagesTo < pagesFrom) {
            event.target.value = showError(event.target,
                `pageTo= ${pagesTo} has to be less than ${pagesFrom}`, errorPageMessage);
        }
    }
}

window.showBook = showBook;
window.getBooks = getBooks;
window.showAllBooks = showAllBooks;
window.getSearchAuthor = getSearchAuthor;
window.onSubmitAuthor = onSubmitAuthor;
window.getSearchPages = getSearchPages;
window.onSubmitPages = onSubmitPages;
window.onChangePages = onChangePages;
