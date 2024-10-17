// Modal.jsx: A reusable modal component for displaying content in a dialog box.

import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, title, children }) => {
  // If the modal is not open, return null and don't render anything.
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close-btn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Controls whether the modal is open or not.
  onClose: PropTypes.func.isRequired, // Function to close the modal.
  title: PropTypes.string, // The title of the modal.
  children: PropTypes.node, // Content inside the modal.
};

// Export the component to be reused in the application.
export default Modal;
