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
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Books Management</h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {editId ? 'Edit Book' : 'Add New Book'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              {editId ? 'Update Book' : 'Add Book'}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Books List</h2>
          <ul className="divide-y divide-gray-200">
            {books.map((book) => (
              <li key={book.id} className="flex justify-between items-center py-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
                  <p className="text-gray-600">by {book.author}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(book)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
