import React, { useState } from 'react';

export default function BookInput(props) {

  const [book, setBook] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setISBN] = useState("");

  function onBookFromSubmit(e) {
    e.preventDefault();

    props.onBookCreate(book);
    props.onBookCreate(title);
    props.onBookCreate(author);
    props.onBookCreate(isbn);

    setBook('');
    setTitle('');
    setAuthor('');
    setISBN('');
  }

  return (
    <div>
      <form onSubmit={onBookFromSubmit}>
        <div className="mb-3">
            <label class="form-label">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}

              type="text"
              className="form-control" />
        </div>
        <div className="mb-3">
            <label class="form-label">
              Author
            </label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}

              type="text"
              className="form-control" />
        </div>
        <div className="mb-3">
            <label class="form-label">
              ISBN#
            </label>
            <input
              value={isbn}
              onChange={(e) => setISBN(e.target.value)}

              type="text"
              className="form-control" />
        </div>
        <div class="d-grid gap-2 mt-4">
            <button className="btn btn-outline-dark" type="submit">
              SUBMIT
            </button>
        </div>
      </form>

    </div>
  )
}