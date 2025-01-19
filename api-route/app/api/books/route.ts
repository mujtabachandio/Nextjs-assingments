import { NextResponse } from 'next/server';

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville' },
  { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 7, title: 'Brave New World', author: 'Aldous Huxley' },
  { id: 8, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { id: 9, title: 'Jane Eyre', author: 'Charlotte Brontë' },
  { id: 10, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
];


// GET: Fetch all books
export async function GET() {
  return NextResponse.json(books);
}

// POST: Add a new book
export async function POST(req: Request) {
  const body = await req.json();
  const newBook = { id: books.length + 1, ...body };
  books.push(newBook);
  return NextResponse.json(newBook, { status: 201 });
}

// PUT: Update a book
export async function PUT(req: Request) {
  const body = await req.json();
  const { id, title, author } = body;

  books = books.map((book) =>
    book.id === id ? { ...book, title, author } : book
  );
  return NextResponse.json({ message: 'Book updated successfully' });
}

// DELETE: Delete a book
export async function DELETE(req: Request) {
  const { id } = await req.json();
  books = books.filter((book) => book.id !== id);
  return NextResponse.json({ message: 'Book deleted successfully' });
}
