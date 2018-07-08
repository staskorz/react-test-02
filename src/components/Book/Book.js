import React from "react"
import propTypes from "prop-types"

import Modal from "../Modal"
import DeleteConfirmationModal from "../DeleteConfirmationModal"

const component = ({
  id,
  title,
  author,
  publicationDate,
  isEditModalOpen,
  openEditModal,
  closeEditModal,
  onBookDelete,
  isDeleteModalOpen,
  onDeleteModalOpen,
  onDeleteModalClose,
}) => (
  <div className="book">
    <div className="author">{author}</div>

    <div className="title-container">
      <div className="title">{title}</div>
    </div>

    <div className="publication-date">{publicationDate}</div>

    <div className="buttons">
      <button onClick={openEditModal}>Edit</button>

      <button onClick={onDeleteModalOpen}>Delete</button>
    </div>

    {isEditModalOpen ? (
      <Modal onClose={closeEditModal}>Hello from Modal!!!</Modal>
    ) : null}

    {isDeleteModalOpen ? (
      <DeleteConfirmationModal
        bookId={id}
        onBookDelete={onBookDelete}
        onClose={onDeleteModalClose}
        onDeleteModalClose={onDeleteModalClose}
      />
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
  isDeleteModalOpen: propTypes.bool.isRequired,
  onDeleteModalOpen: propTypes.func.isRequired,
  onDeleteModalClose: propTypes.func.isRequired,
}

export default component
