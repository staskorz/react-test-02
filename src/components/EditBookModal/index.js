import { compose, withStateHandlers, withHandlers } from "recompose"
import moment from "moment"

import EditBookModal from "./EditBookModal"

const DATE_FORMAT = "YYYY-MM-DD"

const dateToString = date => moment(date).format(DATE_FORMAT)
const stringToDate = str => moment(str, DATE_FORMAT, true).toDate()

const enhance = compose(
  withStateHandlers(
    ({ book }) => ({
      ...book,
      publicationDate: dateToString(book.publicationDate),
    }),
    {
      onAuthorChange: () => event => ({ author: event.target.value }),
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
