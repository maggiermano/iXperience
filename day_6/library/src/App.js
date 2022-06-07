import React, { useState } from 'react';
// import bootstrap styling from node_modules
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';

// import the Task class from the models folder
import { Book } from './models/book';

// import components from components folder
import BookInput from './components/BookInput';
import BookTable from './components/BookTable';

export default function App() {

  const [books, setBooks] = useState([]);

  function onBookCreate(name) {
    // create the task
    const book = new Book(
      new Date().getTime(),
      name,
      false,
    )

    // add the task to the tasks state
    setBooks([...books, book]);
  }


  function onBookCompleteToggle(bookISBN) {
    // toggle task completed state
    const bookToToggle = books.find((book) => book.isbn === bookISBN);
    bookToToggle.complete = !bookToToggle.complete;

    // update the tasks state with the new updates state
    setBooks(books.map((book) => {
      return book.isbn === bookISBN ? bookToToggle : book;
    }));
  }

  function onBookRemove(bookISBN) {
    // update the tasks state with the filtered tasks
    setBooks(books.filter((book) => book.isbn !== bookISBN));
  }

  return (
    <div className='container my-5'>

      <div className='card p-4'>

        <h1>Add Book:</h1>

        <BookInput onBookCreate={onBookCreate} />

        <BookTable
          onBookCompleteToggle={onBookCompleteToggle}
          onBookRemove={onBookRemove}
          books={books} />
      </div>
    </div>
  );
}