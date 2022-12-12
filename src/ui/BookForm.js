import { showError } from "./errorMessage.js";

export class BookForm {
    #bookElement;
    #inputElements;
    #dateInputElement;
    #pageInputElement;
    #dateErrorElement;
    #pageErrorElement;
    #minDate;
    #todayDate;
    #min_range;
    #max_range
    constructor(params) {
        this.#bookElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#dateInputElement = document.getElementById(params.idDateInput);
        this.#pageInputElement = document.getElementById(params.idPageInput);
        this.#dateErrorElement = document.getElementById(params.idDateError);
        this.#pageErrorElement = document.getElementById(params.idPageError);
        this.#minDate = params.minDate;
        this.#todayDate = params.todayDate;
        this.#min_range = params.min_range;
        this.#max_range = params.max_range;
        this.onChange();
    }

    addSubmitHandler(processBook) {
        this.#bookElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const book = Array.from(this.#inputElements).reduce(
                (res, cur) => {
                    res[cur.name] = cur.value;
                    return res;
                }, {}
            )
            processBook(book);
        })
    }
    onChange() {
        this.#dateInputElement.addEventListener("change", (event) => {
            this.validatePublishing(event.target);
        })
        this.#pageInputElement.addEventListener("change", (event) => {
            this.validatePages(event.target);
        })
    }

    validatePublishing(datePublic) {
        const targeDate = new Date(datePublic.value);
        if (targeDate < this.#minDate || targeDate > this.#todayDate) {
            const message = targeDate < this.#minDate ? `publication date must be greater than ${this.#minDate}` :
                `publication date must be less than ${this.#todayDate}`;
            showError(datePublic, message, this.#dateErrorElement);
        }
    }

    validatePages(pagesRange) {
        const pages = pagesRange.value;
        if (pages < this.#min_range || pages > this.#max_range) {
            const message = pages < this.#min_range ? `publication page ranges must be greater than ${this.#min_range}` :
                `publication page ranges must be less than ${this.#max_range}`;
            showError(pagesRange, message, this.#pageErrorElement);
        }
    }
}