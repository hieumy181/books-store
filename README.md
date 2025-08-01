# 📚 Book Store Project

A simple Node.js RESTful API for managing a book store, supporting user registration, login, book listing, searching, and reviews.  
Data is stored in JSON files (no database required).

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will run at: [http://localhost:3000](http://localhost:3000)

---

## 🖥️ Running Node.js Client Scripts

From the project root, run:

```bash
cd nodejs_client
node getAllBooks.js
node searchByISBN.js
node searchByAuthor.js
node searchByTitle.js
```

---

## 📂 Project Structure

```
book-store-project/
│
├── app.js
├── package.json
├── README.md
│
├── controllers/
│   ├── authController.js
│   └── bookController.js
│
├── routes/
│   ├── auth.js
│   └── books.js
│
├── data/
│   └── books.json
│
├── reviews/
│   └── reviews.json
│
├── users/
│   └── users.json
│
└── nodejs_client/
    ├── getAllBooks.js
    ├── searchByISBN.js
    ├── searchByAuthor.js
    └── searchByTitle.js
```

---

## 📑 API Endpoints

### Authentication
- `POST /auth/register` – Register a new user (`{ "username": "...", "password": "..." }`)
- `POST /auth/login` – Login (`{ "username": "...", "password": "..." }`)

### Books
- `GET /books` – Get all books
- `GET /books/isbn/:isbn` – Get book by ISBN
- `GET /books/author/:author` – Get books by author
- `GET /books/title/:title` – Get books by title

### Reviews
- `GET /books/:isbn/review` – Get reviews for a book
- `POST /books/:isbn/review` – Add/modify a review (`{ "user": "...", "review": "..." }`)
- `DELETE /books/:isbn/review` – Delete a review (`{ "user": "..." }`)

---

## 📝 Notes

- All data is stored in JSON files, no database is required.
- Make sure the server is running before executing any client scripts in `nodejs_client`.
- For API testing, use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

---

## 📸 Screenshots

> Add screenshots of your API responses and client script outputs here for documentation or grading purposes.

---

## 🧑‍💻 Author

- Hieu My