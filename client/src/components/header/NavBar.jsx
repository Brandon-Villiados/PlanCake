import React, { Component } from 'react';
import Login from './Login.jsx';
import Signup from './SignUp.jsx';
import Modal from 'react-modal';
import axios from 'axios';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      view: 'login'
    }

    this.handleModal = this.handleModal.bind(this);
    this.handleView = this.handleView.bind(this);
    this.sendLogin = this.sendLogin.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  handleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen})
  }

  handleView() {
    this.setState({view: this.state.view === 'login' ? 'signup' : 'login'})
  }

  sendLogin(credentials) {
    axios.post('/api/login', credentials)
    .then(data => {
      window.location.replace(`${window.location.origin}/dashboard`);
    });
  }

  render() {
    return(
      <div className="header grid">
        <div>
          <img src="plancake2.png" alt="plancake.png"/>
        </div>
        <div className="login jsas">
          <a onClick={this.handleModal.bind(this)}>Login</a>
          <Modal
            isOpen={this.state.modalIsOpen}
            // overlayClassName="modal-overlay"
          >
            {this.state.view === 'login' 
            ? <Login 
                handleView={this.handleView}
                handleModal={this.handleModal}
                sendLogin={this.sendLogin}
              /> 
              : <Signup 
                  handleModal={this.handleModal}
                  sendLogin={this.sendLogin}
              />}
          </Modal>
        </div>
      </div>
    )
  }
}