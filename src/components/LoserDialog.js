import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom"; 
import { useSelectedCharContext } from "../context/SelectedCharContx";

function LoserDialog({getRandomChar}){
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()
    const charToGuess = useSelectedCharContext()
    function navGame() { 
      getRandomChar();
      setOpen(false);}
    const navHome = () => navigate('/')
   
    const divStyle = {
      backgroundColor: "red", // camel cased
      height: "100px",
      
 }
  
    return (
    <div stlye={divStyle}>
        
      
      <Dialog  open={open} >
        <DialogTitle sx={{ backgroundColor: '#A98DB8'}}>{":( "}</DialogTitle>
        <DialogContent sx={{ backgroundColor: '#A98DB8'}}>
          <DialogContentText>
            
            <p>Run out of tries</p>
          </DialogContentText>
       
        </DialogContent>
        <DialogActions>
            
          <Button onClick={navGame} 
                  color="primary" autoFocus>
            Play again
          </Button>
          <Button onClick={navHome} 
                  color="primary" autoFocus>
            Back to homepage
          </Button>
        </DialogActions>
      </Dialog>
      </div>
  );
}
    
    
   

export default LoserDialog