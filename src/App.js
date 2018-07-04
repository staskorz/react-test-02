import React from "react"

import BookList from "./components/BookList"

const books = [
  {
    id: 123,
    author: "Author Author",
    title: "Title Title Title Title",
    publicationDate: "1948",
  },
  {
    id: 124,
    author: "Author Author",
    title: "Title Title Title Title",
    publicationDate: "1948",
  },
  {
    id: 125,
    author: "Author Author",
    title: "Title Title Title Title",
    publicationDate: "1948",
  },
  {
    id: 126,
    author: "Author Author",
    title: "Title Title Title Title",
    publicationDate: "1948",
  },
  {
    id: 127,
    author: "Author Author",
    title: "Title Title Title Title",
    publicationDate: "1948",
  },
  {
    id: 128,
    author: "Author Author",
    title: "Title Title Title Title",
    publicationDate: "1948",
  },
  {
    id: 129,
    author: "Author Author",
    title: "Title Title Title Title",
    publicationDate: "1948",
  },
]

export default () => (
  <div>
    <h1>Books</h1>

    <BookList books={books} />
  </div>
)
