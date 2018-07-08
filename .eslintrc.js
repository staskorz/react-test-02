// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  env: {
    es6: true,
    browser: true,
    jest: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",

    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard",
  ],

  plugins: ["prettier", "react"],

  // add your custom rules here
  rules: {
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "react/display-name": "off",
  },
}
