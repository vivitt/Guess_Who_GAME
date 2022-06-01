import React from "react";
import { Dialog } from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom"; 
import { useSelectedCharContext } from "../context/SelectedCharContx";

function EndDialog({getRandomChar, title, text, img}){
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate() 
  const charToGuess = useSelectedCharContext()
  
  function navGame() { 
    getRandomChar();
    setOpen(false);
    }
  
  const navHome = () => navigate('/')
  
  return (
    <div >
      <Dialog  open={open} disableEnforceFocus>
        <DialogTitle>{title}</DialogTitle>
       
        <DialogContent>
          <div className="dialogImg">
         <img  src={require(`../imgs/${img}`)} alt='img' />
         </div>
          <DialogContentText>
            
            <p>{text}</p>
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
    
    
   

export default EndDialog