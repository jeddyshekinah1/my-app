import React from "react";
import BookItem from "./BookItem";

function BookList({ books, deleteBook }) {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books added yet!</p>
      ) : (
        books.map((book) => (
          <BookItem key={book.id} book={book} deleteBook={deleteBook} />
        ))
      )}
    </div>
  );
}

export default BookList;