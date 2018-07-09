import { compose, withStateHandlers, withHandlers } from "recompose"
import moment from "moment"
import validator from "validator"

import EditBookModal from "./EditBookModal"

const DATE_FORMAT = "YYYY-MM-DD"

const dateToString = date => moment(date).format(DATE_FORMAT)
const stringToDate = str => moment(str, DATE_FORMAT, true).toDate()

const enhance = compose(
  withStateHandlers(
    ({ book }) => ({
      ...book,
      publicationDate: dateToString(book.publicationDate),
      authorValidationError: "",
      titleValidationError: "",
      publicationDateValidationError: "",
    }),
    {
      onAuthorChange: () => event => {
        const { value } = event.target

        const authorValidationError = validator.isLength(value.trim(), {
          min: 1,
          max: 20,
        })
          ? ""
          : "Must be between 1 and 20 characters"

        return {
          author: value,
          authorValidationError,
        }
      },

      onTitleChange: () => event => ({ title: event.target.value }),
      onPublicationDateChange: () => event => ({
        publicationDate: event.target.value,
      }),
    },
  ),

  withHandlers({
    onSubmit: ({
      id,
      author,
      title,
      publicationDate,
      onBookEdit,
      onClose,
    }) => () => {
      onBookEdit({
        id,
        author,
        title,
        publicationDate: stringToDate(publicationDate),
      })

      onClose()
    },
  }),
)

export default enhance(EditBookModal)
