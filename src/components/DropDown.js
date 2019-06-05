import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import grey from "@material-ui/core/colors/grey";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({
  root: {
    position: "relative"
  },
  paper: {
    position: "absolute",
    top: 36,
    right: 0,
    left: 0
  },
  fake: {
    backgroundColor: grey[200],
    height: theme.spacing(1),
    margin: theme.spacing(2),
    // Selects every two elements among any group of siblings.
    "&:nth-child(2n)": {
      marginRight: theme.spacing(3)
    }
  }
});


class ClickAway extends React.Component {
  state = {
    open: false,
    option: this.props.menu[0]
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false
    });
  };

  changeOption = name => {
    this.props.setSelectGuest(parseInt(name.slice(0, 1)))
    this.setState({
      option: name
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            <Button onClick={this.handleClick}>
              <FontAwesomeIcon icon={faUserFriends} />
              {this.state.option}
              <FontAwesomeIcon icon={faChevronDown} />
            </Button>
            {open ? (
              <Paper className={classes.paper}>
                {this.props.menu.map(item => {
                  console.log(item)
                  return (
                    <div className='guestDropDown' onClick={() => this.changeOption(item)} key={item}>
                      {item}
                    </div>
                  );
                })}
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

ClickAway.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClickAway);
