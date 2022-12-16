
export class AuthorForm {
    #formElement;
    #authorInputElement;
    #author;
    construcor(params) {
        this.#formElement = document.getElementById(params.idForm);
        this.#authorInputElement = document.getElementById(params.idAuthorInput);
        this.getAuthor();
    }

    addSubmitHandler(processBooksFun) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const authorObj = { authors: this.#author };
            processBooksFun(authorObj);
        })
    }

    getAuthor() {
        this.#authorInputElement.addEventListener("change", (event) => {
            const value = event.target.value;
            this.#author = value;
        })
    }
}




