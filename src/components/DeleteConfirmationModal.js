import React from "react"
import PropTypes from "prop-types"

import Modal from "./Modal"

const Component = ({ bookId, onBookDelete, onClose }) => (
  <Modal onClose={onClose}>
    <p>Delete the book?</p>

    <button data-id={bookId} onClick={onBookDelete}>
      Ok
    </button>

    <button onClick={onClose}>Cancel</button>
  </Modal>
)

Component.propTypes = {
  bookId: PropTypes.number.isRequired,
  onBookDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Component
