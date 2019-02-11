import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      nextCount:0,
      modalIsOpen: false,
    };
    this.increment = this.increment.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  increment() {
    let start = this.state.count;
    if (start > 1) {
      start = start * 2;
    } else {
      start++;
    }
    this.setState({
      count: start,
      modalIsOpen: false,
    });
  }

  openModal() {
    let start = this.state.count;
    if (start > 1) {
      start = start * 2;
    } else {
      start++;
    }
    this.setState({
      modalIsOpen: true,
      nextCount: start,
    });

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div className="counter-main" >
        <h2>Count: {this.state.count} </h2>
        <button onClick={this.openModal}>Increment</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form>
            <h3>Current Count : {this.state.count}</h3>
            <h3>Next Count: {this.state.nextCount}</h3>

            <button onClick={this.increment}>Confirm</button>
            <button onClick={this.closeModal}>Cancel</button>
          </form>
        </Modal>
       
      </div>
    );
  }
}
