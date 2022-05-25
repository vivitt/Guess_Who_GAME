import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import CloseIcon from '@mui/icons-material/Close';

function PlayingDialog ({open, setOpen, title, text}){
  function close() { 
    setOpen(false);
  }
  return (
    <div >
      <Dialog  open={open} disableEnforceFocus>
        <DialogTitle >{title}</DialogTitle>
        <DialogContent >
          <DialogContentText>
          <p>{text}</p> 
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} variant="contained" color="secondary"   autoFocus>
            <CloseIcon></CloseIcon>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
    
    
   

export default PlayingDialog