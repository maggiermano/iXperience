import React, { useState } from 'react';

export default function BookInput(props) {

  const [book, setBook] = useState("");

  function onBookFromSubmit(e) {
    e.preventDefault();

    props.onBookCreate(book);

    setBook('');
  }

  return (
    <div>
      <form onSubmit={onBookFromSubmit}>
        <div className="mb-3">
            <label class="form-label">
              Title
            </label>
            <input
              value={book}
              onChange={(e) => setBook(e.target.value)}

              type="text"
              className="form-control" />
        </div>
        <div className="mb-3">
            <label class="form-label">
              Author
            </label>
            <input
              value={book}
              onChange={(e) => setBook(e.target.value)}

              type="text"
              className="form-control" />
        </div>
        <div className="mb-3">
            <label class="form-label">
              ISBN#
            </label>
            <input
              value={book}
              onChange={(e) => setBook(e.target.value)}

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