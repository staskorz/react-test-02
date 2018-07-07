import React from "react"
import propTypes from "prop-types"

const component = ({ title, author, publicationDate }) => (
  <div className="book">
    <div className="author">{author}</div>

    <div className="title-container">
      <div className="title">{title}</div>
    </div>

    <div className="publication-date">{publicationDate}</div>

    <div className="buttons">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
)

component.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  publicationDate: propTypes.string,
}

export default component
