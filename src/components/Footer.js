import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailList: []
    };
    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEmail = this.addEmail.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  addEmail() {
    let emailList = this.state.emailList;
    let newEmail = this.inputRef.value;

    if (newEmail === "") {
      return null;
    } else {
      emailList.push(newEmail);
    }

    this.setState({ emailList });
    console.log(emailList);
    this.inputRef.value = "";
    this.inputRef.focus();
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
              ref={e => (this.inputRef = e)}
            />
            <button className="email-btn" onClick={this.addEmail}>
              SUBSCRIBE
            </button>
          </form>
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
