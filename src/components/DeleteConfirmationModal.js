import React from "react"
import PropTypes from "prop-types"

import Modal from "./Modal"

const Component = ({ bookId, onBookDelete, onDeleteModalClose }) => (
  <Modal onClose={onDeleteModalClose}>
    <p>Delete the book?</p>

    <button data-id={bookId} onClick={onBookDelete}>
      Ok
    </button>

    <button onClick={onDeleteModalClose}>Cancel</button>
  </Modal>
)

Component.propTypes = {
  bookId: PropTypes.number.isRequired,
  onBookDelete: PropTypes.func.isRequired,
  onDeleteModalClose: PropTypes.func.isRequired,
}

export default Component
