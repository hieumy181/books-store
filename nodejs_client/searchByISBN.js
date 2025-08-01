import axios from 'axios';

function searchByISBN(isbn) {
  return axios.get(`http://localhost:3000/books/isbn/${isbn}`);
}

searchByISBN('1111')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));