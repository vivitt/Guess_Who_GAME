import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom"; 


function WinnerDialog({time, questCounter, getRandomChar}){
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()

    const navGame = () => navigate('/game')
    const navHome = () => navigate('/')
    const handleToClose = () => {
    setOpen(false);
    
    };
  
    return (
    <div stlye={{}}>
        
      
      <Dialog open={open} >
        <DialogTitle>{"Yeah!! You Win!!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
            <p>You needed {time} minutes and {questCounter} questions to guess</p>
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
    
    
   

export default WinnerDialog