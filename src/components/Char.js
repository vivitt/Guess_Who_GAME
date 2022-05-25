import React from 'react';
import style from './Char.module.css';
import { useState } from 'react';
import CharDialog from './CharDialog';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from '@material-ui/core'
import { deepPurple } from "@material-ui/core/colors";
import { useSoundContext } from '../context/SoundContext';

function Char({char, discardedChars, setDiscardedChars}) {
    const imgPath = char.image;
    
    const [open, setOpen] = React.useState(false);
    const [ discarded, setDiscarded] = useState(false)
    const sound = useSoundContext()

    function toggleClass() { 
        if (sound.mute === false) sound.btnClick()
        if (discarded === false) {
            setDiscarded(true)
            setDiscardedChars([char.id, ...discardedChars])
        } else {
            setDiscarded(false)
            setDiscardedChars(discardedChars.filter((item) => item !== char.id))
        }
    }
  
    return (
        <div className={style.card} >
            <a onClick={toggleClass} className={(discardedChars.some(item => item === char.id)) ? 'discard'
            : ''}>

                <img className={style.charImg} src={require(`../imgs/${imgPath}`)} alt={char.descr} /> 
                <p>{char.id}</p>
            </a>
                <Button onClick= {() => {(setOpen(true) ); if (sound.mute === false) sound.btnClick()}}> <VisibilityIcon sx={{ color: deepPurple[500] }}></VisibilityIcon> </Button>  
                {
                    (open === true) && <CharDialog open={open} setOpen={setOpen} char={char} />
                }
             
             
        </div>
    )
}

export default Char