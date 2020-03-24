import React, { Component } from "react";

class Modal extends Component {
  render() {
    
    const closeModalButton = document.querySelector('#closeModal');

    closeModalButton.addEventListener('click', function(e) {

        const modalWindow = document.querySelector('.modal-overlay');
        modalWindow.classList.toggle('open');
    })


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
