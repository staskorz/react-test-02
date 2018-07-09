import React from "react"
import PropTypes from "prop-types"

import Modal from "../Modal"

const Component = ({
  id,
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
    <div className="edit-book-form">
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

          <div className="validation-error">{authorValidationError}</div>
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

          <div className="validation-error">{titleValidationError}</div>
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

          <div className="validation-error">
            {publicationDateValidationError}
          </div>
        </div>
      </div>

      <div>
        <button onClick={onSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  </Modal>
)

Component.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publicationDate: PropTypes.instanceOf(Date).isRequired,
  onAuthorChange: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onPublicationDateChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Component
