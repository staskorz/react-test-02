import React from "react"
import PropTypes from "prop-types"

import Modal from "../Modal"
import ValidationError from "../ValidationError"

const Component = ({
  author,
  title,
  publicationDate,
  onAuthorChange,
  onTitleChange,
  onPublicationDateChange,
  onSubmit,
  titleValidationError,
  authorValidationError,
  publicationDateValidationError,
  onClose,
}) => (
  <Modal onClose={onClose}>
    <form className="edit-book-form" onSubmit={onSubmit}>
      <div className="form-title">Edit book</div>

      <div className="form-controls">
        <div>
          <div>
            <label htmlFor="author">Author</label>
          </div>

          <div>
            <input
              type="text"
              id="author"
              value={author}
              onChange={onAuthorChange}
            />
          </div>

          <ValidationError validationError={authorValidationError} />
        </div>

        <div>
          <div>
            <label htmlFor="title">Title</label>
          </div>

          <div>
            <input
              type="text"
              id="title"
              value={title}
              onChange={onTitleChange}
            />
          </div>

          <ValidationError validationError={titleValidationError} />
        </div>

        <div>
          <div>
            <label htmlFor="date">Date</label>
          </div>

          <div>
            <input
              type="text"
              id="date"
              value={publicationDate}
              onChange={onPublicationDateChange}
            />
          </div>

          <ValidationError validationError={publicationDateValidationError} />
        </div>
      </div>

      <div>
        <button type="submit">Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </form>
  </Modal>
)

Component.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onPublicationDateChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  titleValidationError: PropTypes.string.isRequired,
  authorValidationError: PropTypes.string.isRequired,
  publicationDateValidationError: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Component
