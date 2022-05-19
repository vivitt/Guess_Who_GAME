import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";


function TryAgain({oneTry, openTryDialog, setOpenTryDialog}){
  
  
  function navGame() { 
    setOpenTryDialog(false);
  }
  return (
    <div >
      <Dialog  open={openTryDialog} disableEnforceFocus>
        <DialogTitle >{"No :("}</DialogTitle>
        <DialogContent >
          <DialogContentText>
          <p>It is not {oneTry.toUpperCase()}</p> 
          
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={navGame} variant="contained" color="primary"  autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
    
    
   

export default TryAgain