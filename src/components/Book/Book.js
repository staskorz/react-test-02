import React from "react"
import propTypes from "prop-types"

import Modal from "../Modal"

const component = ({
  title,
  author,
  publicationDate,
  isEditModalOpen,
  openEditModal,
  closeEditModal,
}) => (
  <div className="book">
    <div className="author">{author}</div>

    <div className="title-container">
      <div className="title">{title}</div>
    </div>

    <div className="publication-date">{publicationDate}</div>

    <div className="buttons">
      <button onClick={openEditModal}>Edit</button>
      <button>Delete</button>
    </div>

    {isEditModalOpen ? (
      <Modal onClose={closeEditModal}>Hello from Modal!!!</Modal>
    ) : null}
  </div>
)

component.propTypes = {
  title: propTypes.string,
  author: propTypes.string,
  publicationDate: propTypes.string,
  isEditModalOpen: propTypes.bool.isRequired,
  openEditModal: propTypes.func.isRequired,
  closeEditModal: propTypes.func.isRequired,
}

export default component
