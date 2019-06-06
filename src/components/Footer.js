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


  addEmail(e) {
    e.preventDefault();
    let emailList = this.state.emailList;
    let newEmail = this.inputRef.current.value;
    console.log(newEmail, 'email submitted')
    if (newEmail === "") {
      return null;
    }

    axios.post(process.env.ENV === 'development' ? 'http://localhost:5000/emails' : '/emails', {email: newEmail}).then(response => {
      console.log(emailList);
      // this.inputRef.current.value = "";
      // this.inputRef.current.focus();
      window.location.href = '/';
    }).catch(err => {
      this.setState({err: err.message})
    })

  }

  render() {
    return (
      <div className="footer-container">
        <img
          className="footer-logo"
          src="./images/Langbaan-Logo.png"
          alt="logo"
        />

        <div className="footer-input">
          <form
          className="footer-form"
          autoComplete='on'
          onSubmit={this.addEmail}
          >
            <input
              type="email"
              name='email'
              placeholder="Enter Email for Deals"
              ref={this.inputRef}
            />
            <input type='submit' className="email-btn"
              value='SUBSCRIBE'
            />
          </form>
          {this.state.err.length > 0 ?
          <div>
            {this.state.err}
          </div> : null}
        </div>
        <div className="sm-icon-container">
          <a href="https://www.facebook.com/Langbaankitchen/" target="_blank" className="fa fa-facebook" rel="noopener noreferrer"/>
          <a href="https://twitter.com/langbaan?lang=en" target="_blank" className="fa fa-twitter" rel="noopener noreferrer"/>
          <a href="https://www.instagram.com/langbaanpdx/?hl=en" target="_blank" className="fa fa-instagram" rel="noopener noreferrer"/>
        </div>
      </div>
    );
  }
}

export default Footer;
