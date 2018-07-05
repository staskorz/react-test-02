import { compose, withProps, lifecycle } from "recompose"

import mountYearFromDate from "../../util/month-year-from-date"

import BookList from "./BookList"

const transformBooksServerToClient = books =>
  books.map(({ authorName, publicationDate, ...rest }) => ({
    author: authorName,
    publicationDate: mountYearFromDate(publicationDate),
    ...rest,
  }))

const enhance = compose(
  withProps({
    books: [],
  }),

  lifecycle({
    componentDidMount() {
      fetch("/fake-books.json")
        .then(response => response.json())
        .then(transformBooksServerToClient)
        .then(books => this.setState({ books }))
    },
  }),
)

export default enhance(BookList)
