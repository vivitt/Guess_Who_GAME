import React from "react";
import { Dialog }  from '@mui/material';
import { DialogContent } from '@mui/material';
import Button   from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close';
import { Paper } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { useSoundContext } from "../context/SoundContext";

function CharDialog({char, open, setOpen}){
  const sound = useSoundContext()
  const imgPath = char.image; 
  function close() { 
    if (sound.mute === false) sound.btnClick()
    setOpen(false);
  }
  
  return (
    <div >
      <Dialog open={open} scroll="paper">
        <Paper square={true}>
     
          <DialogContent dividers={true} >
            <img width='300px' src={require(`../imgs/${imgPath}`)} alt={char.descr} />
            <h2 style={{color: '#673BB' }}>{char.id}</h2>
          
          </DialogContent>
          <Button onClick={close}  autoFocus>
              <CloseIcon sx={{ color: deepPurple[500] }} ></CloseIcon>
            </Button>
        </Paper>
      </Dialog>
    </div>
  );
}
export default CharDialog