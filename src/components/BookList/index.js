import {
  compose,
  withProps,
  lifecycle,
  branch,
  renderComponent,
  withState,
  withHandlers,
  withStateHandlers,
} from "recompose"

import Spinner from "../Spinner"
import BookList from "./BookList"

const transformBooksServerToClient = books =>
  books.map(({ authorName, publicationDate, ...rest }) => ({
    author: authorName,
    publicationDate: new Date(publicationDate),
    ...rest,
  }))

const enhance = compose(
  withProps({
    loading: true,
  }),

  lifecycle({
    componentDidMount() {
      fetch("/fake-books.json")
        .then(response => response.json())
        .then(transformBooksServerToClient)
        .then(books =>
          this.setState({
            loading: false,
            books,
          }),
        )
    },
  }),

  branch(({ loading }) => loading, renderComponent(Spinner)),

  withState("books", "setBooks", ({ books }) => books),

  withHandlers({
    onBookDelete: ({ books, setBooks }) => event => {
      const { id } = event.target.dataset
      const numericBookId = parseInt(id, 10)

      setBooks(books.filter(({ id }) => id !== numericBookId))
    },

    onBookEdit: ({ books, setBooks }) => modifiedBook => {
      setBooks(
        books.map(book => (book.id === modifiedBook.id ? modifiedBook : book)),
      )
    },

    onBookAdd: ({ books, setBooks }) => newBook => {
      setBooks([newBook, ...books])
    },
  }),

  withStateHandlers(
    {
      isAddModalOpen: false,
    },

    {
      onAddModalOpen: () => () => ({
        isAddModalOpen: true,
      }),

      onAddModalClose: () => () => ({
        isAddModalOpen: false,
      }),
    },
  ),
)

export default enhance(BookList)
