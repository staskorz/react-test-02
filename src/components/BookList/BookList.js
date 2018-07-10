import React from "react"
import PropTypes from "prop-types"

import Book from "../Book"
import FAB from "../FAB"

const Component = ({ books, onBookDelete, onBookEdit }) => (
  <div>
    <h1>Books</h1>

    <div className="books-container">
      {books.map(({ id, author, title, publicationDate }) => (
        <Book
          key={id}
          id={id}
          author={author}
          title={title}
          publicationDate={publicationDate}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        />
      ))}
    </div>

    <FAB label="+" onClick={() => console.log("Clicked!!")} />
  </div>
)

Component.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      title: PropTypes.string,
      publicationDate: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,

  onBookDelete: PropTypes.func.isRequired,
  onBookEdit: PropTypes.func.isRequired,
}

export default Component
