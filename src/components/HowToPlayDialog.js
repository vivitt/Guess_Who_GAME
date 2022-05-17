import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import CloseIcon from '@mui/icons-material/Close';



function HowToPlayDialog({open, setOpen}){
  
  function close(e) { 
    e.preventDefault()
    setOpen(false);
    console.log('please close')
  }
  return (
    <div >
        
      
      <Dialog open={open} sx={{borderRadius: '30'}}>
        
      
        <DialogContentText>
            
        <div className="howToPlay">
        
        <div className="instrucctions">
            <h2>How to Play</h2>
            <p>The goal of the game is to guess who the person is by asking questions and discarding characters. <br/>Clicking in a character will toggle their discard state. </p>
            <div>
            <img style={{display: 'inline'}} width='200px' src='ask.gif'></img>
            <img style={{display: 'inline'}} width='200px' src='guess.gif'></img>
            </div>
            <p>You can make as many questions as you want in the EASY mode and 5 questions in the HARD mode.</p>
            <p>When have an idea, you can write the person name in the guess field and try...<br/>
            But be aware you only have 3(EASY) or 1 (HARD) tries to guess!</p>
            <p>Hope you enjoy playing!</p>

        </div>
       
        </div>
          </DialogContentText>
        <DialogActions>
            
          <Button onClick={close}  autoFocus>
            <CloseIcon></CloseIcon>
          </Button>
      
        </DialogActions>
      </Dialog>
      </div>
  );
}
    
    
   

export default HowToPlayDialog