import { compose, withStateHandlers } from "recompose"

import Book from "./Book"

const enhance = compose(
  withStateHandlers(
    {
      isEditModalOpen: false,
    },
    {
      openEditModal: () => () => ({
        isEditModalOpen: true,
      }),

      closeEditModal: () => () => ({
        isEditModalOpen: false,
      }),
    },
  ),
)

export default enhance(Book)
