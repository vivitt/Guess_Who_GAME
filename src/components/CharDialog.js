import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import CloseIcon from '@mui/icons-material/Close';
import Paper from "@mui/material/Paper";
import { deepPurple } from "@mui/material/colors";




function CharDialog({char, open, setOpen}){
  
  const imgPath = char.image; 
  
  function close() { 
    setOpen(false);
  }
  return (
    <div >
      <Dialog open={open} >
        <Paper scroll="body" >
          <DialogContent dividers={true} >
            <img width='300px' src={require(`../imgs/${imgPath}`)} alt={char.descr} />
            <h2 style={{color: '#673BB' }}>{char.id}</h2>
            <Button onClick={close}  autoFocus>
              <CloseIcon sx={{ color: deepPurple[500] }} ></CloseIcon>
            </Button>
          </DialogContent>
        
        </Paper>
      </Dialog>
    </div>
  );
}
    
    
   

export default CharDialog