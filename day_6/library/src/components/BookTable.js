import React from 'react'

export default function BookTable(props) {

  // console.log(props)

  return (
    <div>
      <table className="table mt-5"> 
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {
            props.books.map((book) =>
              <tr key={book.isbn}>
                <td>{book.title}</td>

                <td>{book.author}</td>

                <td>{book.isbn}</td>

                <td>
                  <div onClick={() => props.onBookRemove(book.isbn)}>
                    <i className="bi bi-trash"></i>
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}