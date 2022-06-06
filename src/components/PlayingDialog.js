import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
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