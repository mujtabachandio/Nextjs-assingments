import { NextResponse } from 'next/server';

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
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
