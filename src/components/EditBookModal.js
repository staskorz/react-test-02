import React from "react"
import PropTypes from "prop-types"

import Modal from "./Modal"

const Component = ({
  book: {
    id,
    title,
    author,
    publicationDate,
    titleValidationError,
    authorValidationError,
    publicationDateValidationError,
  },
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
            <input type="text" id="author" value={author} />
          </div>

          <div className="validation-error">{authorValidationError}</div>
        </div>

        <div>
          <div>
            <label htmlFor="title">Title</label>
          </div>

          <div>
            <input type="text" id="title" value={title} />
          </div>

          <div className="validation-error">{titleValidationError}</div>
        </div>

        <div>
          <div>
            <label htmlFor="date">Date</label>
          </div>

          <div>
            <input type="text" id="date" value={publicationDate} />
          </div>

          <div className="validation-error">
            {publicationDateValidationError}
          </div>
        </div>
      </div>

      <div>
        <button>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  </Modal>
)

Component.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
  }).isRequired,

  onClose: PropTypes.func.isRequired,
}

export default Component
