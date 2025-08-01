import fs from 'fs';
import path from 'path';

const booksPath = path.resolve('data/books.json');
const reviewsPath = path.resolve('reviews/reviews.json');

function readBooks() {
  if (!fs.existsSync(booksPath)) return [];
  return JSON.parse(fs.readFileSync(booksPath, 'utf-8'));
}

function readReviews() {
  if (!fs.existsSync(reviewsPath)) return {};
  return JSON.parse(fs.readFileSync(reviewsPath, 'utf-8'));
}

function writeReviews(reviews) {
  fs.writeFileSync(reviewsPath, JSON.stringify(reviews, null, 2));
}

export const getAllBooks = (req, res) => {
  const books = readBooks();
  res.json(books);
};

export const getBookByISBN = (req, res) => {
  const books = readBooks();
  const book = books.find(b => b.isbn === req.params.isbn);
  if (book) res.json(book);
  else res.status(404).json({ message: 'Book not found' });
};

export const getBooksByAuthor = (req, res) => {
  const books = readBooks();
  const result = books.filter(b => b.author.toLowerCase() === req.params.author.toLowerCase());
  res.json(result);
};

export const getBooksByTitle = (req, res) => {
  const books = readBooks();
  const result = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
  res.json(result);
};

export const getBookReview = (req, res) => {
  const reviews = readReviews();
  const review = reviews[req.params.isbn] || [];
  res.json(review);
};

export const addOrModifyReview = (req, res) => {
  const { user, review } = req.body;
  const reviews = readReviews();
  if (!reviews[req.params.isbn]) reviews[req.params.isbn] = [];
  const idx = reviews[req.params.isbn].findIndex(r => r.user === user);
  if (idx > -1) reviews[req.params.isbn][idx].review = review;
  else reviews[req.params.isbn].push({ user, review });
  writeReviews(reviews);
  res.json({ message: 'Review added/modified' });
};

export const deleteReview = (req, res) => {
  const { user } = req.body;
  const reviews = readReviews();
  if (!reviews[req.params.isbn]) return res.status(404).json({ message: 'No reviews' });
  reviews[req.params.isbn] = reviews[req.params.isbn].filter(r => r.user !== user);
  writeReviews(reviews);
  res.json({ message: 'Review deleted' });
};