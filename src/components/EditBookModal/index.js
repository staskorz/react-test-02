import { compose, withStateHandlers, withHandlers } from "recompose"
import moment from "moment"
import validator from "validator"

import EditBookModal from "./EditBookModal"

const DATE_FORMAT = "YYYY-MM-DD"

const dateToString = date => moment(date).format(DATE_FORMAT)
const stringToDate = str => moment(str, DATE_FORMAT, true).toDate()

const getValidationMessageForString = ({ value, min, max }) =>
  validator.isLength(value.trim(), { min, max })
    ? ""
    : `Must be between ${min} and ${max} characters`

const getValidationMessageForAuthor = value =>
  getValidationMessageForString({ value, min: 1, max: 20 })

const getValidationMessageForTitle = value =>
  getValidationMessageForString({ value, min: 1, max: 30 })

const getValidationMessageForPublicationDate = value =>
  moment(value, DATE_FORMAT, true).isValid()
    ? ""
    : `Must be formatted as "${DATE_FORMAT}"`

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
      onAuthorChange: () => ({ target: { value } }) => ({
        author: value,
        authorValidationError: getValidationMessageForAuthor(value),
      }),

      onTitleChange: () => ({ target: { value } }) => ({
        title: value,
        titleValidationError: getValidationMessageForTitle(value),
      }),

      onPublicationDateChange: () => ({ target: { value } }) => ({
        publicationDate: value,
        publicationDateValidationError: getValidationMessageForPublicationDate(
          value,
        ),
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
      onAuthorChange,
      onTitleChange,
      onPublicationDateChange,
    }) => () => {
      // trigger all validation messages to be displayed
      // required for displaying validation messages for untouched fields
      onAuthorChange({ target: { value: author } })
      onTitleChange({ target: { value: title } })
      onPublicationDateChange({ target: { value: publicationDate } })

      // do not save if one of the validations fails
      if (
        getValidationMessageForAuthor(author) ||
        getValidationMessageForTitle(title) ||
        getValidationMessageForPublicationDate(publicationDate)
      ) {
        return
      }

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
