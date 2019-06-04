import React from "react";
import { CSSTransitionGroup } from "react-transition-group";
import { Link } from 'react-router-dom';

const Menu = ({ nav, toggle, toggleRes }) => {
  let dropDownStyle = {
    width: "100vw",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    position: "absolute",
    zIndex: "99",
    top: 100
  };

  let dropDownListStyle = {
    width: "100vw",
    borderBottom: "1px solid #999",
    backgroundColor: "white",
    listStyle: "none",
    textAlign: "center",
    display: "flex",
    justifyContent: "center"
  };

  let normalMenuStyle = {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    listStyle: "none",
    margin: 5
  };

  return (
    <ul style={toggle ? dropDownStyle : normalMenuStyle}>
      {nav.map((li, i) => {
        return (
          <CSSTransitionGroup key={i}
            transitionName="navLinkFade"
            transitionAppear={true}
            transitionAppearTimeout={i * 300}
            transitionEnter={false}
            transitionLeave={false}
          >
              { li !== 'Reservations' ?
            (<li
              style={toggle ? Object.assign({}, dropDownListStyle, {}) : null}
              className="nav-li"
              key={li}
            >
              <Link to={`/${li}`}>{li}</Link>
            </li>) :  (<li onClick={toggleRes}
              style={toggle ? Object.assign({}, dropDownListStyle, {}) : null}
              className="nav-li"
              key={li}
            >
              <a>{li}</a>
            </li>)
            }
          </CSSTransitionGroup>
        );
      })}
    </ul>
  );
};

export default Menu;
