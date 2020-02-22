import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Modal from '../UI/Modal/Modal';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';

class Body extends Component {
  state = {
    showModal: false,
    modalContent: "test"
  }

  showModal = (content) => {
    this.setState({
      showModal: true,
      modalContent: content
    });
  }
  hideModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <>
        {/* MODAL */}
        {
          this.state.showModal
          ? <Modal backdropOnClick={this.hideModal} content={this.state.modalContent}/>
          : null
        }

        <Route path="/" exact>
          <Portfolio
            functions={{
              showModal: this.showModal,
              hideModal: this.hideModal
            }}/>
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </>
    )
  }
}

export default Body;
