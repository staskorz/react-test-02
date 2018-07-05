import React from "react"
import PropTypes from "prop-types"

import Book from "../Book"

const Component = ({ books }) => (
  <div>
    <h1>Books</h1>

    <div className="books-container">
      {books.map(({ id, author, title, publicationDate }) => (
        <Book
          key={id}
          author={author}
          title={title}
          publicationDate={publicationDate}
        />
      ))}
    </div>
  </div>
)

Component.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      title: PropTypes.string,
      publicationDate: PropTypes.string,
    }),
  ).isRequired,
}

export default Component
