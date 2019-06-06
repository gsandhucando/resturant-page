import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import DropDown from "./DropDown";
import axios from "axios";
import SimpleReactCalendar from "simple-react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

let style = {
  padding: 12
};

let rightArrow = (
  <div style={style}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

let leftArrow = (
  <div style={style}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

let circleStyle = {
  width: 10,
  height: 10,
  display: "inline-block",
  borderRadius: "50%",
  border: "1px solid",
  marginRight: "10px"
};

let disptionStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%"
};

function getModalStyle() {
  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
    width: "80vw",
    maxWidth: 600,
    minWidth: 300
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none",
    overflowY: "scroll"
  }
}));

function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [reservations, setReservations] = React.useState([]);
  const classes = useStyles();

  let [selectDate, setSelectDate] = useState("");
  let [selectGuest, setSelectGuest] = useState(1);

  const onSelect = e => {
    setSelectDate(e);
  };

  let getReservations = () => {
    axios
      .get(process.env.ENV === 'development' ? "http://localhost:5000/posts" : '/posts')
      .then(response => {
        let data = response.data;
        setReservations(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  let setRes = () => {
    let newDate = new Date(selectDate)
    axios
      .post(process.env.ENV === 'development' ? "http://localhost:5000/posts" : '/posts', {guest: selectGuest, date: newDate})
      .then(response => {
        let data = response.data;
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(getReservations, []);

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open ? props.open : false}
        onClose={props.handleClose}
      >
        <div style={modalStyle} className={classes.paper + " modal"}>
          <div>
            <Typography variant="h6" style={{color: '#827553'}}>LANGBAAN</Typography>
          </div>
          <div style={disptionStyle}>
            <Typography>NEED TO KNOW</Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              <p>
                We offer a seasonal driven pre-fixe chef's tasting menu. If you
                have allergies or dietary restrictions, please make a note about
                it when making a reservation. We apologize in advance if we
                cannot accommodate certain restrictions, it may change monthly.
                Reservations are available 3 months in advance. Please contact
                us directly at 971-344-2564 for reservations of 5+ people.
              </p>
              <p>
                {/* Our seating times are Thursday - Saturday 6:00pm & 8:45pm, */}
                {/* Sunday 5:30pm & 8:15pm */}
              </p>
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <DropDown
              menu={[
                "1 Guest",
                "2 Guests",
                "3 Guests",
                "4 Guests",
                "5+ Guests"
              ]}
              setSelectGuest={setSelectGuest}
            />
          </div>
          <div style={{ width: 500 }}>
            <SimpleReactCalendar
              onSelect={onSelect}
              headerNextArrow={rightArrow}
              headerPrevArrow={leftArrow}
              activeMonth={new Date()}
              disableDaysOfWeek={false}
            />
          </div>
          <div className='modal-container'>
          <SimpleModal />
          <button className='resModalBtn' onClick={setRes}>Confirm Reservation</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;
