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


function Home ({mode, setMode, openHowTo, setOpenHowTo}) {
    
    const currentUser = useUserContext()
    const [ value, setValue ] = useState("")
    const [ selectedMode, setSelectedMode ] = useState('')
    const navigate = useNavigate();
    const userPlay = currentUser.userName.charAt(0).toUpperCase() + currentUser.userName.slice(1);
    
    function submitName(event, error) {
        event.preventDefault()
       
        currentUser.setUserName(value);
        setValue("")
        navigate('/game')
    }
    
    const navHowToPlay = () => navigate('/howtoplay')
    
    const navGame = () => navigate('/game')
    const [imgNum, setImgNum ] = useState(1)

    const increaseNum = () => {
        if(imgNum=== 5) {setImgNum(1)
        }else {setImgNum(imgNum+1)}}
    const decreaseNum = () => {
        if(imgNum=== 1) {setImgNum(5)
    }else {setImgNum(imgNum-1)}}

    const setEasy = () => {
        setMode('easy')
        setSelectedMode('infinite questions & 3 tries to guess')
    }
    const setHard = () => {
        setMode('hard')
        setSelectedMode('5 questions & 1 try to guess')
    }
     
    return (
        
        <ThemeProvider theme={theme}>
        
        
        <div className="startGame">
        <Paper >
            <div className="box">
                <div className="homeImg">
                    <img src="guesswho.png"></img>
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
                            <TextField label="ENTER YOUR NAME" type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
                            
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