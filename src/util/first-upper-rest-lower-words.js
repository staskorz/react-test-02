import firstUpperRestLower from "./first-upper-rest-lower"

export default str =>
  str
    .split(" ")
    .map(firstUpperRestLower)
    .join(" ")
