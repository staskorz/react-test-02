import React from "react"
import propTypes from "prop-types"

import EditBookModal from "../EditBookModal"
import DeleteConfirmationModal from "../DeleteConfirmationModal"

const component = ({
  id,
  title,
  author,
  publicationDate,
  isEditModalOpen,
  onEditModalOpen,
  onEditModalClose,
  onBookDelete,
  onBookEdit,
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
      <button onClick={onEditModalOpen}>Edit</button>

      <button onClick={onDeleteModalOpen}>Delete</button>
    </div>

    {isEditModalOpen ? (
      <EditBookModal
        onClose={onEditModalClose}
        book={{ id, title, author, publicationDate }}
        onBookEdit={onBookEdit}
      />
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
  onEditModalOpen: propTypes.func.isRequired,
  onEditModalClose: propTypes.func.isRequired,
  onBookDelete: propTypes.func.isRequired,
  onBookEdit: propTypes.func.isRequired,
  isDeleteModalOpen: propTypes.bool.isRequired,
  onDeleteModalOpen: propTypes.func.isRequired,
  onDeleteModalClose: propTypes.func.isRequired,
}

export default component
