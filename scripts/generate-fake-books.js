const faker = require("faker")

const NUM_BOOKS = 20

// constant seed so faker will always produce same results
// * must also define "reference date"
const SEED = 222

// constant reference date so faker will produce same results also for dates
const REF_DATE = "2018-07-03"

// number of spaces to use for JSON indentation
const JSON_INDENT_NUM_SPACES = 2

faker.seed(SEED)

const fakeBooks = new Array(NUM_BOOKS).fill(null).map(() => ({
  id: faker.random.number(),
  authorName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  publicationDate: faker.date.past(null, REF_DATE),
  title: faker.random.words(),
}))

const fakeBooksJSON = JSON.stringify(fakeBooks, null, JSON_INDENT_NUM_SPACES)

// eslint-disable-next-line no-console
console.log(fakeBooksJSON)
