
class Book {
    constructor(DataTransferItemList, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UserInterface {

    constructor(){
        this.form = document.getElementById('form');

        this.title = document.getElementById('title-input');
        this.author = document.getElementById('author-input');
        this.isbn = document.getElementById('isbn-input');

        this.table = document.getElementById('table-body');

        this.form.addEventListener('submit', (event) => {
            this.onFormSubmitted(event);
        });

        this.books = [];
    }

    onFormSubmitted(event) {
        event.preventDefault();

        const book = new Book(
            this.title.value,
            this.author.value,
            this.isbn.value,
        );

        this.books.push(book);
    }

    renderTableBody() {
        
    }
}

new UserInterface();