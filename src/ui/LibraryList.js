
export class LibraryList {
    #listElement;
    constructor(idList) {
        this.#listElement = document.getElementById(idList);
    }
    showBooks(book) {
        this.#listElement.innerHTML = getBooks(book)
    }
}
function getBooks(book) {
    return book.map(value =>
        `<div class="detail-list">
    <ul>
        <li>title: ${value.book_title}</li>
        <li>author: ${value.author}</li>
        <li>genre: ${value.genre}</li>
        <li>date: ${value.publishingDate}</li>
        <li>pages: ${value.pages}</li>
    </ul>
    </div>` );
}