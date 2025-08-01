import axios from 'axios';

async function searchByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:3000/books/title/${encodeURIComponent(title)}`);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}
searchByTitle('Node');
