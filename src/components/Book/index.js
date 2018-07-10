import { compose, withProps, withStateHandlers } from "recompose"
import moment from "moment"

import Book from "./Book"
import firstUpperRestLowerWords from "../../util/first-upper-rest-lower-words"

const formatDate = date => moment(date).format("MMMM D, YYYY")

const enhance = compose(
  withProps(({ title, publicationDate }) => ({
    title: firstUpperRestLowerWords(title),
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
