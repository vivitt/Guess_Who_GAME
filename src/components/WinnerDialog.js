import React from "react";
import { Dialog } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom"; 
import { useSelectedCharContext } from "../context/SelectedCharContx";

function WinnerDialog({time, questCounter, getRandomChar}){
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate() 
  const charToGuess = useSelectedCharContext()
  
  function navGame() { 
    getRandomChar();
    setOpen(false);
    }
  
  const navHome = () => navigate('/')
  
  return (
    <div>
      <Dialog  open={open} disableEnforceFocus>
        <DialogTitle>{`Yes!! Is ${charToGuess.selectedChar.id} `}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>You guessed in {time} minutes and {questCounter} questions </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={navGame} 
                  variant="contained" color="primary" autoFocus>
            Play again
          </Button>
          <Button onClick={navHome} 
                 variant="contained" color="primary" autoFocus>
            Back to homepage
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
    
    
   

export default WinnerDialog