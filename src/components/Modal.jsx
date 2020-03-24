import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <span id="closeModal" className="modal-close">
            X
          </span>
          <p id="chuckSays" />
        </div>
      </div>
    );
  }
}

export default Modal;
