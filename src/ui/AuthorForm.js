
export class AuthorForm {
    #formElement;
    #authorInputElement;

    constructor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#authorInputElement = document.getElementById(params.idAuthorInput);
    }

    addSubmitHandler(processBooksFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const authorObj = this.#authorInputElement.value;
            processBooksFun(authorObj);
        })
    }
}




