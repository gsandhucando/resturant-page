import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

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
    outline: "none"
  }
}));

function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={()=> {props.handleBio(false)}}
      >
        <div style={modalStyle} className={classes.paper}>
          <div>
            <Typography variant="h6">
              EARL NINSOM, executive chef & owner
            </Typography>
          </div>

          <Typography>NEED TO KNOW</Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            <p>
              Earl Ninsom was only 8 years old when he cooked his first dish: a
              simple rice-and-pork porridge he prepared for his mother when she
              fell ill. He hasn’t left the kitchen since. Today critics regard
              the Bangkok, Thailand-born restaurateur among the most talented
              chefs in Portland, Oregon, where he helms a small empire of
              nationally acclaimed Thai restaurants — including Langbaan, PaaDee
              and Hat Yai.
            </p>
          </Typography>

          <SimpleModal />
        </div>
      </Modal>
    </div>
  );
}

export default SimpleModal;
