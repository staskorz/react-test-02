import React from "react"
import PropTypes from "prop-types"

import Modal from "./Modal"

const Component = ({
  book: { id, title, author, publicationDate },
  onClose,
}) => (
  <Modal onClose={onClose}>
    <div>
      <div>
        <label htmlFor="title">Title</label>
      </div>
      <input type="text" id="title" />
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
