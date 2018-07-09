import { compose, withStateHandlers, withHandlers } from "recompose"

import EditBookModal from "./EditBookModal"

const enhance = compose(
  withStateHandlers(
    ({ book }) => ({
      ...book,
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
    onSubmit: ({ id, author, title, publicationDate, onClose }) => () => {
      console.log("book:", id, author, title, publicationDate)

      onClose()
    },
  }),
)

export default enhance(EditBookModal)
