# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a small REST API for a book catalog using FastAPI. Practice defining endpoints, handling path parameters and JSON request bodies, and returning appropriate HTTP status codes.

## 📝 Tasks

### 🛠️ List the books

#### Description
Complete the starter app so clients can request the full book catalog. Install FastAPI and Uvicorn with `python -m pip install fastapi uvicorn`, then run the app with `uvicorn starter-code:app --reload`.

#### Requirements
Completed program should:

- Return all books as a JSON array from `GET /books`.
- Include each book's `id`, `title`, and `author` in the response.
- Start successfully and show the interactive API page at `http://127.0.0.1:8000/docs`.

### 🛠️ Look up a book

#### Description
Add an endpoint that looks up one book by its ID and reports clearly when that book does not exist.

#### Requirements
Completed program should:

- Return the matching book from `GET /books/{book_id}`.
- Accept `book_id` as an integer path parameter.
- Return HTTP `404` with a helpful detail message when no book has that ID.

### 🛠️ Add a book

#### Description
Add an endpoint that accepts a new book's title and author as JSON, assigns it an ID, and adds it to the in-memory catalog.

#### Requirements
Completed program should:

- Accept `title` and `author` in the JSON body of `POST /books`.
- Use the provided `BookCreate` model to validate the request body.
- Assign a unique ID and return the newly created book with HTTP `201`.
- Verify in `/docs` that the new book appears in `GET /books` and can be retrieved by ID.