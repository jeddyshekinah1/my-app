import React from "react";

function BookItem({ book, deleteBook }) {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>By {book.author}</p>
      <button onClick={() => deleteBook(book.id)}>❌ Delete</button>
    </div>
  );
}

export default BookItem;