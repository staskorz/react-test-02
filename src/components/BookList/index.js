import { compose, withProps, lifecycle } from "recompose"

import mountYearFromDate from "../../util/month-year-from-date"

import BookList from "./BookList"

const enhance = compose(
  withProps({
    books: [],
  }),
  lifecycle({
    componentDidMount() {
      console.log("in componentDidMount()")
      // const { setState } = this

      fetch("/fake-books.json")
        .then(response => {
          console.log(response)
          return response.json()
        })
        .then(books =>
          books.map(({ authorName, publicationDate, ...rest }) => ({
            author: authorName,
            publicationDate: mountYearFromDate(publicationDate),
            ...rest,
          })),
        )
        .then(books => this.setState({ books }))
    },
  }),
)

export default enhance(BookList)
