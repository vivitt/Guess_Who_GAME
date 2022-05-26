import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContextProv"
import { Paper, TextField } from '@material-ui/core'
import { Button } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';
import { deepPurple } from "@mui/material/colors"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import { useSoundContext } from "../context/SoundContext"

function Home ({mode, setMode}) {
    
    const currentUser = useUserContext()
    const [ value, setValue ] = useState("")
    const [ selectedMode, setSelectedMode ] = useState('')
    const navigate = useNavigate();
    const userPlay = currentUser.userName.charAt(0).toUpperCase() + currentUser.userName.slice(1);
    
    const sound = useSoundContext()


    function submitName(event ) {
        event.preventDefault()
        
        currentUser.setUserName(value);
        currentUser.setProfileImg(imgNum)
        setValue("")
        navigate('/game')
        if (sound.mute === false) sound.winner()

    }
    
   
    const [imgNum, setImgNum ] = useState(1)

    const increaseNum = () => {
        
        if(imgNum=== 5) {setImgNum(1) } else { setImgNum(imgNum+1);}
        if (sound.mute === false) sound.swipeImg();}
    const decreaseNum = () => {
        
        if(imgNum=== 1) {setImgNum(5)}else {setImgNum(imgNum-1)}
        if (sound.mute === false) sound.swipeImg();}

    const setEasy = () => {
        setMode('easy')
        setSelectedMode('infinite questions & 3 tries to guess')
        if (sound.mute === false) sound.btnClick()
    }
    const setHard = () => {
        setMode('hard')
        setSelectedMode('5 questions & 1 try to guess')
        if (sound.mute === false) sound.btnClick()
    }
  
    return (
        
        <ThemeProvider theme={theme}>
        
        
        <div className="startGame">
        <Paper >
            <div className="box">
                <div className="homeImg">
                    
                    <picture>
                        <source media="(max-width: 799px)" srcSet="guesswho_500.png" />
                        <source media="(min-width: 800px)" srcSet="guesswho_800.png" />
                        <img src="guesswho_800.png" alt='cards from the guess who game' />
                    </picture>

                </div>
                <div className="rigth">
                    <div className="mode">
                        <h2>Mode</h2>
                        <div className="modeBtn">
                            <Button variant="contained" color="secondary" onClick={setEasy} >Easy</Button>
                            <Button variant="contained" color="secondary" onClick={setHard} >Hard</Button>
                            {(selectedMode) && 
                            <div className="modeInfo">{selectedMode}</div>
                            }
                        </div>

                    </div>
                    <div className="playerSettings">

                        <h2>Player settings</h2>
                        <div className="getUserImg">
                            <Button onClick={decreaseNum} > <ArrowLeftIcon sx={{ color: deepPurple[500] }}></ArrowLeftIcon> </Button>
                            <img className="profileImg" src={(`0${imgNum}.png`)}></img>
                            <Button onClick={increaseNum} > <ArrowRightIcon sx={{ color: deepPurple[500] }}></ArrowRightIcon> </Button>
                        </div>
                        <div className="getUserName">
                            <TextField required={true}  label="ENTER YOUR NAME" type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                            
                        </div>
                        <Button variant='contained' color='primary' onClick={submitName}>Play!</Button>
                    </div>
                </div>
            </div>
        </Paper>
        </div>
 
        </ThemeProvider>
        
    )

}


export default Home