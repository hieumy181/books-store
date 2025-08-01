import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from './routes/books.js';
import authRoutes from './routes/auth.js';

const app = express();
app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});