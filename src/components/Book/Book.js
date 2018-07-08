import React from "react"
import propTypes from "prop-types"

import Modal from "../Modal"

const component = ({
  id,
  title,
  author,
  publicationDate,
  isEditModalOpen,
  openEditModal,
  closeEditModal,
  onBookDelete,
}) => (
  <div className="book">
    <div className="author">{author}</div>

    <div className="title-container">
      <div className="title">{title}</div>
    </div>

    <div className="publication-date">{publicationDate}</div>

    <div className="buttons">
      <button onClick={openEditModal}>Edit</button>

      <button data-id={id} onClick={onBookDelete}>
        Delete
      </button>
    </div>

    {isEditModalOpen ? (
      <Modal onClose={closeEditModal}>Hello from Modal!!!</Modal>
    ) : null}
  </div>
)

component.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
  author: propTypes.string,
  publicationDate: propTypes.string,
  isEditModalOpen: propTypes.bool.isRequired,
  openEditModal: propTypes.func.isRequired,
  closeEditModal: propTypes.func.isRequired,
  onBookDelete: propTypes.func.isRequired,
}

export default component
