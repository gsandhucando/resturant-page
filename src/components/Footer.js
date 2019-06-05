import React, { Component } from "react";
import axios from 'axios';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: ''
    };
    this.inputRef = React.createRef();
    this.addEmail = this.addEmail.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  addEmail() {
    let emailList = this.state.emailList;
    let newEmail = this.inputRef.current.value;
    console.log(newEmail, 'email submitted')
    if (newEmail === "") {
      return null;
    }

    axios.post('http://localhost:5000/emails', {email: newEmail}).then(response => {
      console.log(emailList);
      this.inputRef.current.value = "";
      this.inputRef.current.focus();
    }).catch(err => {
      this.setState({err: err.message})
    })

  }

  render() {
    return (
      <div className="footer-container">
        <img
          className="footer-logo"
          src="./images/LangBaan-Logo.png"
          alt="logo"
        />

        <div className="footer-input">
          <form
          className="footer-form"
          onSubmit={this.handleSubmit}
          autoComplete='on'
          >
            <input
              type="email"
              name='email'
              placeholder="Enter Email for Deals"
              ref={this.inputRef}
            />
            <button type='button' className="email-btn" onClick={this.addEmail}>
              SUBSCRIBE
            </button>
          </form>
          {this.state.err.length > 0 ?
          <div>
            {this.state.err}
          </div> : null}
        </div>
        <div className="sm-icon-container">
          <a href="/" className="fa fa-facebook" />
          <a href="/" className="fa fa-twitter" />
          <a href="/" className="fa fa-instagram" />
        </div>
      </div>
    );
  }
}

export default Footer;
