import { compose, withProps, withStateHandlers } from "recompose"
import moment from "moment"

import Book from "./Book"

const formatDate = date => moment(date).format("MMMM D, YYYY")

const enhance = compose(
  withProps(({ publicationDate }) => ({
    publicationDateString: formatDate(publicationDate),
  })),

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
