import { AuthorForm } from "./ui/AuthorForm.js"
import { Library } from "./data/library.js";
import { BookForm } from "./ui/bookForm.js";
import { LibraryList } from "./ui/LibraryList.js";
import { PagesForm } from "./ui/PagesForm.js";

const ACTIVE = "active";
const MIN_DATE = new Date("1980-01-01");
const TODAY_DATE = new Date();
const MIN_RANGE = 50;
const MAX_RANGE = 2000;

const library = new Library();
const listLibraryByAuthor = new LibraryList("author-books");
const listAllBooks = new LibraryList("all-books");
const listLibraryByRange = new LibraryList("range-pages")

const sectionElement = document.querySelectorAll("section");
const buttonsMenu = document.querySelectorAll(".main-button *");

const bookForm = new BookForm({
    idForm: "book_form", idDateInput: "date_input",
    idPageInput: "page_input", idDateError: "date_error", idPageError: "page_error",
    minDate: MIN_DATE, todayDate: TODAY_DATE, min_range: MIN_RANGE, max_range: MAX_RANGE
})
bookForm.addSubmitHandler((book) => library.addBook(book))

const authorForm = new AuthorForm({
    idForm: "authors_form", idAuthorInput: "author_input"
})
authorForm.addSubmitHandler((authorObj) => {
    const authors = library.getAuthorBooks(authorObj.author);
    listLibraryByAuthor.showBooks(authors);
})

const pagesForm = new PagesForm({
    idForm: "form_pages", idPagesFromInput: "pages-from",
    idPagesToInput: "pages-to", idErrorMessage: "error-pages"
})
pagesForm.addSubmitHandler((booksObj) => {
    const books = library.getRangePages(booksObj.pagesFrom, booksObj.pagesTo);
    listLibraryByRange.showBooks(books);
})



function showBook(index) {
    sectionElement.forEach(section => section.hidden = true);
    buttonsMenu.forEach(button => button.classList.remove(ACTIVE));
    sectionElement[index].hidden = false;
    buttonsMenu[index].classList.add(ACTIVE);
    if (index == 1) {
        const books = library.getAllBooks();
        listAllBooks.showBooks(books);
    }
}

window.showBook = showBook;

