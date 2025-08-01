import axios from 'axios';

async function searchByAuthor(author) {
  try {
    const res = await axios.get(`http://localhost:3000/books/author/${encodeURIComponent(author)}`);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}
searchByAuthor('John Doe');