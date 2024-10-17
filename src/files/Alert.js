import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import "../App.css";
import { Link } from "react-router-dom";
export default function Alert({ open, closeOpen }) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    closeOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="dialog" id="alert-dialog-title">
          {"Are You Sure ?"}
        </DialogTitle>
        <DialogContent className="dialog">
          <DialogContentText
            style={{ color: "black" }}
            id="alert-dialog-description"
          >
            To Download OR Show My Cv 📰
          </DialogContentText>
        </DialogContent>
        <DialogActions className="dialog">
          <Button className="btn-dialog" onClick={handleClose}>
            No
          </Button>
          <Button
            href="https://drive.google.com/file/d/1WBS-E5C4jhygXANjFv7eQK_uDXXpzmZb/view?usp=drivesdk"
            className="btn-dialog"
            onClick={handleClose}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
