import {
  compose,
  withProps,
  lifecycle,
  branch,
  renderComponent,
  withState,
  withHandlers,
} from "recompose"

import mountYearFromDate from "../../util/month-year-from-date"

import Spinner from "../Spinner"
import BookList from "./BookList"

const transformBooksServerToClient = books =>
  books.map(({ authorName, publicationDate, ...rest }) => ({
    author: authorName,
    publicationDate: mountYearFromDate(publicationDate),
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
  }),
)

export default enhance(BookList)
