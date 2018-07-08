import { compose, withStateHandlers } from "recompose"

import Book from "./Book"

const enhance = compose(
  withStateHandlers(
    {
      isEditModalOpen: false,
      isDeleteModalOpen: false,
    },

    {
      openEditModal: () => () => ({
        isEditModalOpen: true,
      }),

      closeEditModal: () => () => ({
        isEditModalOpen: false,
      }),

      onDeleteModalOpen: () => () => ({
        isDeleteModalOpen: true,
      }),

      onDeleteModalClose: () => () => ({
        isDeleteModalOpen: false,
      }),
    },
  ),
)

export default enhance(Book)
