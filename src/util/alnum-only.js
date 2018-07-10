const regexNonAlphaSpace = /[^A-Za-z\s]/g

export default str => str.replace(regexNonAlphaSpace, "")
