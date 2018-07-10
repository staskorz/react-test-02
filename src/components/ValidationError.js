import React from "react"
import PropTypes from "prop-types"

const Component = ({ validationError }) => (
  <div
    className="validation-error"
    style={{ visibility: validationError ? "visible" : "hidden" }}
  >
    {validationError}
  </div>
)

Component.propTypes = {
  validationError: PropTypes.string.isRequired,
}

export default Component
