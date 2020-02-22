import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <>
        <div className="modal-container">
          <div className="modal-backdrop" onClick={this.props.backdropOnClick}></div>
          <div className="modal-content">{this.props.content}</div>
        </div>
      </>
    )
  }
}

export default Modal;
