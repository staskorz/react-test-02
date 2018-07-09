import { compose, withProps, withStateHandlers } from "recompose"

import Book from "./Book"
import monthYearFromDate from "../../util/month-year-from-date"

const enhance = compose(
  withProps(({ publicationDate }) => ({
    publicationDateString: monthYearFromDate(publicationDate),
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
