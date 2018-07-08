import React from "react"
import PropTypes from "prop-types"

const Component = ({ children, onClose }) => (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={onClose}>
        &times;
      </span>

      {children}
    </div>
  </div>
)

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,

  onClose: PropTypes.func.isRequired,
}

export default Component
