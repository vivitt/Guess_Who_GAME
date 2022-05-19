import React from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContextProv"
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from '@material-ui/core'
import style from './NavBar.module.css';
import { pink, grey } from "@material-ui/core/colors";
import HowToPlayDialog from "./HowToPlayDialog";

function NavBar() {
    const currentUser = useUserContext()
    const [open, setOpen] = React.useState(false);
    
    function deleteCurrentUser() {
        currentUser.setUserName('')
    }
    
    function openHandler(e) {
        e.preventDefault()
        setOpen(true)
    }
    
    return (
        <div className={style.navBar}>
            <h3>GuessWho Game</h3>
            <ul>
                <li>
                    <Button title="On / Off"> <MusicNoteIcon sx={{ color: pink[500] }} /> </Button>
                </li>
                
                <li>
                    <Button onClick={openHandler}><QuestionMarkIcon sx={{ color: pink[500], textShadow: grey[100] }} /></Button>
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