import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <>
        <div className="modal-container">
          <div className="modal-backdrop" onClick={this.props.backdropOnClick}></div>
          <div className="modal-content">
            <div className="text-right">
              <span className="modal-closeModal" onClick={this.props.backdropOnClick}>Close <i class="fas fa-times"></i></span>
            </div>
            {this.props.content}
          </div>
        </div>
      </>
    )
  }
}

export default Modal;
