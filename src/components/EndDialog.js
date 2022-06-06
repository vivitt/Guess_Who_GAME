import React from "react";
import { Dialog } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; 
import { useSelectedCharContext } from "../context/SelectedCharContx";

function EndDialog({getRandomChar, title, text, img, name}){
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
            <p>{name}</p>
         </div>
        </DialogContent>
        <DialogContentText><p>{text}</p></DialogContentText>
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