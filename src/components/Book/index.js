import { compose, withStateHandlers } from "recompose"

import Book from "./Book"

const enhance = compose(
  withStateHandlers(
    {
      isEditModalOpen: false,
      isDeleteModalOpen: false,
    },

    {
      onEditModalOpen: () => () => ({
        isEditModalOpen: true,
      }),

      onEditModalClose: () => () => ({
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
