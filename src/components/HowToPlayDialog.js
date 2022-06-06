import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { useSoundContext } from "../context/SoundContext";

function HowToPlayDialog({open, setOpen}){
  const sound = useSoundContext()
  function close(e) { 
    if (sound.mute === false) sound.btnClick()
    e.preventDefault()
    setOpen(false);
    
  }

  return (
    <div >
      <Dialog open={open} sx={{borderRadius: '30'}}>
        <DialogContentText>
          <div className="howToPlay">
            <div className="instrucctions">
              <h2>How to Play</h2>
              <p>The goal of the game is to guess who the person is by asking questions and discarding characters. </p>
              <p>You can make as many questions as you want in EASY mode and 5 questions in HARD mode.</p>
              <p>Click in characters to discard them.</p>
              <p>Whenever you want, you can try to guess by submiting the person name in the guess field...<br/>
              But be aware you only have 3(EASY) or 1 (HARD) tries to guess!</p>
              <p>Hope you enjoy playing!</p>
              <br/>
              <p>You can reach me at ✉️ with any suggestion or comment</p>
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