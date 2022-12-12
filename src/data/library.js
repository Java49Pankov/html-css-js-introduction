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
        return this.books.filter(a => a.author == author);
    }
    getRangePages(pagesFrom, pagesTo) {
        return this.books.filter(e => e.pages >= pagesFrom && e.pages < pagesTo);
    }
}