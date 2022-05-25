import React from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContextProv"
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from '@material-ui/core'
import style from './NavBar.module.css';
import { pink, grey } from "@material-ui/core/colors";
import HowToPlayDialog from "./HowToPlayDialog";
import { useSoundContext } from "../context/SoundContext";


function NavBar() {
    const currentUser = useUserContext()
    const [open, setOpen] = React.useState(false);
    const sound = useSoundContext();
    
    function deleteCurrentUser() {
        if (sound.mute === false) sound.btnClick()
        currentUser.setUserName('')
    }
    
    function openHandler(e) {
        if (sound.mute === false) sound.btnClick()
        e.preventDefault()
        setOpen(true)
    }
    function soundButton(e) {
        e.preventDefault()
        if (sound.mute === false) sound.btnClick()
        if (sound.mute === false) {
            sound.setMute(true)
    } else {
        sound.setMute(false)
    }
}   
    return (
        <div className={style.navBar}>
            <h3>GuessWho Game</h3>
            <ul>
                <li>
                    <Button onClick={soundButton} title="On/Off Sound"> 
                    {(sound.mute === true) 
                    ?<MusicOffIcon sx={{ color: pink[500] }} />
                    :<MusicNoteIcon sx={{ color: pink[500] }} /> }</Button>
                </li>
                
                <li>
                    <Button onClick={openHandler} title="How to play" ><QuestionMarkIcon sx={{ color: pink[500], textShadow: grey[100] }} /></Button>
                </li>
                {                        (currentUser.userName) &&
                <li>
                    <Button> <NavLink to="/" title="EXIT" onClick={deleteCurrentUser}><ExitToAppIcon sx={{ color: pink[500] }} /> </NavLink></Button>
                </li>
                }
          
            
            </ul>

            <div>
            {(open === true) && <HowToPlayDialog  open={open} setOpen={setOpen} /> }
            </div>
        </div>
       
    )

}

export default NavBar