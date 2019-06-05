import React, { Component } from "react";
import Menu from "./Menu";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
console.log(debounce);

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleClass: false,
      mobile: false
    };
    this.toggleClassName = this.toggleClassName.bind(this);
    this.updateDimensions = debounce(this.updateDimensions.bind(this), 500);
  }

  // this.state.toggleClass ? "nav-active" : "nav-ul"

  toggleClassName() {
    console.log("className toggled!");
    this.setState(prevState => ({
      toggleClass: !prevState.toggleClass
    }));
  }

  updateDimensions() {
    console.log(window.innerWidth);
    if (window.innerWidth < 600) {
      this.setState({
        mobile: true
      });
    } else {
      this.setState({ mobile: false });
    }
  }

  componentDidMount() {
    if (window.innerWidth < 600) {
      this.setState({
        mobile: true
      });
    } else {
      this.setState({ mobile: false });
    }
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
    let logoStyle = {
      width: 100,
      height: 100
    };

    let navStyle = {
      zIndex: 98,
      minHeight: "15vh",
      width: "100vw",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    };

    let mobileNavStyle = Object.assign({}, navStyle, {
      justifyContent: "center"
    });

    let mobileLogoStyle = {
      width: 100,
      height: 100
    };

    let mobileBurgerStyle = {
      position: "absolute",
      right: 0,
      margin: 5
    };

    return (
      <nav style={this.state.mobile ? mobileNavStyle : navStyle}>
        {this.state.mobile && this.state.toggleClass ? (
          <Menu
            location={this.props.location}
            nav={this.props.nav}
            toggle={this.state.mobile && this.state.toggleClass}
            openMenu={this.state.toggleClass}
            mobile={this.state.mobile}
          />
        ) : null}
        <div
          style={!this.state.mobile ? { position: "absolute", left: 40 } : null}
        >
          <Link to="/">
            <img
              style={this.state.mobile ? mobileLogoStyle : logoStyle}
              src="./images/LangBaan-Logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {this.state.mobile ? (
          <div
            onClick={this.toggleClassName}
            className="burger"
            style={this.state.mobile ? mobileBurgerStyle : null}
          >
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
        ) : (
          <Menu
            toggle={this.state.mobile}
            toggleRes={this.props.toggleRes}
            nav={this.props.nav}
          />
        )}
      </nav>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default Nav;
