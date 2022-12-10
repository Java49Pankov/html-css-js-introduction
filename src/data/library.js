export class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getAllBooks() {
        return this.books;
    }
    getAuthorBooks(author) {
        return getSearchAuthor(this.books, author);
    }
    getRangePages(pagesFrom, pagesTo) {
        return getSearchPages(this.books, pagesFrom, pagesTo)
    }
}