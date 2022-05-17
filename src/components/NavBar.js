import React from "react"
import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContextProv"
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button } from '@material-ui/core'
import style from './NavBar.module.css';
import { pink, grey } from "@material-ui/core/colors";

function NavBar(setOpenHowTo) {
    const currentUser = useUserContext()
    function deleteCurrentUser() {
        currentUser.setUserName('')
    }
    function openHowTo() {
        
        setOpenHowTo(true)
        console.log('click')
    }
    return (
        
        <div className={style.navBar}>
            <h3>GuessWho Game</h3>
            <ul>
                <li>
                    <Button title="On / Off"> <MusicNoteIcon sx={{ color: pink[500] }} /> </Button>
                </li>
                
                <li>
                 <Button onClick={openHowTo}><QuestionMarkIcon sx={{ color: pink[500], textShadow: grey[100] }} /></Button>
                </li>
                
                
                
                
                {/* <li>
                 <Button><NavLink to="/howtoplay" title="How to play"><QuestionMarkIcon sx={{ color: pink[500], textShadow: grey[100] }} /></NavLink></Button>
                </li> */}
                    {
                (currentUser.userName) &&
                    <li>
                 <Button> <NavLink to="/" title="EXIT" onClick={deleteCurrentUser}><ExitToAppIcon sx={{ color: pink[500] }} /> </NavLink></Button>
                </li>
             }
          
            
             </ul>
        </div>
       
    )

}

export default NavBar