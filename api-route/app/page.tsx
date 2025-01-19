'use client';

import { useState, useEffect } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  // Fetch books
  const fetchBooks = async () => {
    const res = await fetch('/api/books');
    const data = await res.json();
    setBooks(data);
  };

  // Add or update book
  const handleSave = async () => {
    if (editId) {
      await fetch('/api/books', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editId, title, author }),
      });
    } else {
      await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author }),
      });
    }
    setTitle('');
    setAuthor('');
    setEditId(null);
    fetchBooks();
  };

  // Delete book
  const handleDelete = async (id: number) => {
    await fetch('/api/books', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchBooks();
  };

  // Edit book
  const handleEdit = (book: Book) => {
    setEditId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Books List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mr-2 text-black"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 mr-2 text-black"
        />
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2"
        >
          {editId ? 'Update' : 'Add'}
        </button>
      </div>
      <ul>
        {books.map((book) => (
          <li
            key={book.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <strong>{book.title}</strong> by {book.author}
            </div>
            <div>
              <button
                onClick={() => handleEdit(book)}
                className="bg-yellow-500 text-white px-4 py-1 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book.id)}
                className="bg-red-500 text-white px-4 py-1"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
