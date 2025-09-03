import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'


function App() {
  // Initial dataset of books
  const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear" },
    { id: 2, title: "The Power of Now", author: "Eckhart Tolle" },
    { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add a new book
  const addBook = () => {
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    const newBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Delete a book
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="app-container">
      <h1>📚 My Book List</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default App;

