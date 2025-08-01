import express from 'express';
import {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview,
  addOrModifyReview,
  deleteReview
} from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/isbn/:isbn', getBookByISBN);
router.get('/author/:author', getBooksByAuthor);
router.get('/title/:title', getBooksByTitle);
router.get('/:isbn/review', getBookReview);
router.post('/:isbn/review', addOrModifyReview);
router.delete('/:isbn/review', deleteReview);

export default router;