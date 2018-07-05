const options = {
  month: "long",
  year: "numeric",
}

const intl = new Intl.DateTimeFormat("en-US", options)

export default dateStr => {
  const dateObj = new Date(dateStr)

  return intl.format(dateObj)
}
