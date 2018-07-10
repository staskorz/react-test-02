import React from "react"
import PropTypes from "prop-types"

const Component = ({ label, onClick }) => (
  <div className="fab" onClick={onClick}>
    {label}
  </div>
)

Component.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Component
