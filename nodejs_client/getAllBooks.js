import axios from 'axios';

async function getAllBooks() {
  try {
    const res = await axios.get('http://localhost:3000/books');
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}
getAllBooks();