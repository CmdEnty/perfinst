import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function StudentFormDialog() {
  const [open, setOpen] = React.useState(true);


//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        onClick = {() => window.location("addStudent")}
      >
        <DialogTitle>{"Student Registration Completed"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
             You have successsfully regestered a student.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button href="addStudent">
            <Typography color="white !important">OK</Typography>
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}