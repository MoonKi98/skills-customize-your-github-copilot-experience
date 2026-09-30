from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel

app = FastAPI(title="Book Catalog API")


class BookCreate(BaseModel):
    title: str
    author: str


books = [
    {"id": 1, "title": "The Hobbit", "author": "J.R.R. Tolkien"},
    {"id": 2, "title": "A Wrinkle in Time", "author": "Madeleine L'Engle"},
]
next_book_id = 3


@app.get("/books")
def list_books():
    raise NotImplementedError("Return the book catalog")


@app.get("/books/{book_id}")
def get_book(book_id: int):
    raise NotImplementedError("Find a book or return HTTP 404")


@app.post("/books")
def create_book(book: BookCreate):
    raise NotImplementedError("Add a book and return HTTP 201")