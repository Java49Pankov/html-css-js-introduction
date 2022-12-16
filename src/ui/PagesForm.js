import { showError } from "./errorMessage.js";

export class PagesForm {
    #formElement;
    #pagesFromInputElement;
    #pagesToInputElement;
    #errorPageMessage;
    #pagesFrom;
    #pagesTo;
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#pagesFromInputElement = document.getElementById(params.idPagesFromInput);
        this.#pagesToInputElement = document.getElementById(params.idPagesToInput);
        this.#errorPageMessage = document.getElementById(params.idErrorMessage);
        this.onChangePagesFrom();
        this.onChangePagesTo();
    }
    addSubmitHandler(processPages) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const booksObj = { pagesFrom: this.#pagesFrom, pagesTo: this.#pagesTo };
            processPages(booksObj);
        })
    }

    onChangePagesFrom() {
        this.#pagesFromInputElement.addEventListener("change", (event) => {
            const value = +event.target.value;
            if (this.#pagesTo && value >= this.#pagesTo) {
                showError(event.target,
                    `PagesFrom must be less than PagesTo`, this.#errorPageMessage);
            } else {
                this.#pagesFrom = value;
            }
        })
    }

    onChangePagesTo() {
        this.#pagesToInputElement.addEventListener("change", (event) => {
            const value = +event.target.value;
            if (this.#pagesFrom && value < this.#pagesFrom) {
                showError(event.target,
                    `PageTo must be greater than PagesFrom`, this.#errorPageMessage);
            } else {
                this.#pagesTo = value;
            }
        })
    }
}