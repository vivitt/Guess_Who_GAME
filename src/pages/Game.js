import * as React from 'react';
import { useEffect, useState } from "react"
import characters from "../characters"
import Char  from  "../components/Char"
import { firstChoice, secondChoice } from "../QuestOptions"
import { useUserContext } from "../context/UserContextProv"
import WinnerDialog from '../components/WinnerDialog';
import { useSelectedCharContext } from "../context/SelectedCharContx";
import LoserDialog from '../components/LoserDialog';
import { Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';
import QuestionInput from "../components/QuestionInput"
import CurrentGameInfo from "../components/CurrentGameInfo"
import GuessSection from "../components/GuessSection"
import Clock from "../components/Clock"
import TryAgain from '../components/TryAgain';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from "@material-ui/core";
import FaceIcon from '@mui/icons-material/Face';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Game ({mode, setMode}) {
    // ////DIALOG
    // const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    //USERNAME
    const currentUser = useUserContext()
    const userPlay = currentUser.userName.charAt(0).toUpperCase() + currentUser.userName.slice(1);
    const [seconds, setSeconds] = useState(0);
    
    ////////////////////////////////////
    
    const [ firstValue, setFirstValue ] = useState('')
    const [ secondValue, setSecondValue ] = useState('')
    const [ questionStatus, setQuestionStatus ] = useState('')
    const [ questCounter, setQuestCounter ] = useState(0);
    const [ answer, setAnswer ] = useState('')
    const [ timeNeeded, setTimeNeeded ] = useState(0)
    const [haveWinner, setHaveWinner ] = useState(false);
    const [ haveLoser, setHaveLoser ] = useState(false)
    const [openTryDialog, setOpenTryDialog] = React.useState(true);
    const [ allCharClass, setAllCharClass ] = useState('');
    ////\\\\char to guess
    const charToGuess = useSelectedCharContext()
    ////////////////////////////////////
    const getRandomChar = () => {
        setHaveLoser(false);
        setHaveWinner(false);
        setTries(0)
        setSeconds(0)
        setQuestCounter(0)
        setAllCharClass('')
        toggleDrawer('right', false)
        toggleDrawer('left', false)
        const len = characters.length;
        const random = characters[Math.floor(Math.random() * len)]
        charToGuess.setSelectedChar({...random})
       
        let interval = null;
        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
      }
   
        useEffect(() => {
            getRandomChar();
           }, [])
    /////////////////////////////////////////////

           ///Get TIME
           let time = seconds;
           let mins = Math.floor(time / 60)
           let secs = time % 60;

           /////\\\\\\\ Q & A ////////\\\\\\\
    
    function submitQuest(e) {
        e.preventDefault();
        if (mode === 'easy' || mode === 'hard' && questCounter < 5) {
        setQuestionStatus('')
        const quest = {firstValue , secondValue}
        if ( secondValue === '') {
            setQuestionStatus('error')
        } else {
            setQuestionStatus('ok')
            getAnswer(quest)
            setQuestCounter(questCounter+1)
        }
   
        setFirstValue('00')
        setSecondValue('')
        
    } 
    
}
    function getAnswer(quest) {
      
        let currentQuest = quest.firstValue + quest.secondValue;
        let check = (Object.keys(charToGuess.selectedChar).find((key) => key === currentQuest))
        if (charToGuess.selectedChar[check] == true) {
            
            setAnswer('Yes')
        } else {
            setAnswer('No')
                
        }
 
    
    }
    //////////////////////////////////////////////////////

    ///\\\\\\ GUESS ////////\\\\\\\\\

    const [ guess, setGuess ] = useState('')
    const [ tries, setTries ] = useState(0)
    const [ tryAgain, setTryAgain ] = useState(false)
    const [ oneTry, setOneTry ] = useState('')
    function submitGuess(e) {
        e.preventDefault();
        setTryAgain(false)
        setOpenTryDialog(true)
        if (guess !== '')
            setTries(tries+1)
            setOneTry(guess)
            setGuess('')
            toggleDrawerOnDialog('right', false)
            console.log(oneTry)
            console.log(charToGuess.selectedChar.id)
            if (guess.toUpperCase() !== charToGuess.selectedChar.id) {
                if (mode ==='easy' && tries === 2) {
                setHaveLoser(true)
            } else if (mode === 'hard' && tries === 0){
                setHaveLoser(true)
            } else {
            setTryAgain(true)
        } 
    }
        else { 
       
            setHaveWinner(true);
            setTimeNeeded(Math.ceil(seconds/60))
            setSeconds(0)
        } 
   
    }
    // (guess.toUpperCase() !== charToGuess.selectedChar.id) 
///////////////////DRAWER

const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    
  };

const toggleDrawerOnDialog = (anchor, close) => {
setState({ ...state, [anchor]: close });
}


  ////////////////////////////////////
    return (
    
    <ThemeProvider theme={theme}>
    <div className='game'>
         <Paper sx={{backgroundColor: theme.palette.primary.contrastText}} >
        <React.Fragment >
            <div className='gameBtns'>
            <Button variant='contained' color='secondary' onClick={toggleDrawer('left', true)}>
                <QuestionMarkIcon></QuestionMarkIcon> ASK a question</Button>
            <Button variant='contained' color='secondary' onClick={toggleDrawer('right', true)}>
            try to GUESS<FaceIcon></FaceIcon>  </Button>
            </div>
            <div className="game-main"> { characters.map(char => ( <Char allCharClass={allCharClass} setAllCharClass={setAllCharClass} char={char}  /> )) } </div>
            
            <SwipeableDrawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}onOpen={toggleDrawer('right', true)}>
            
                <div className="playerArea">
                    <Clock mins={mins} secs={secs}></Clock>
                    <CurrentGameInfo userPlay={userPlay} />
                </div>
                    <GuessSection guess={guess} setGuess={setGuess} submitGuess={submitGuess} tries={tries} mode={mode} />
            </SwipeableDrawer>
                          
            <SwipeableDrawer anchor="left" open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)} >
            <div className="rigth-game">
                <div className="playerArea">
                    <Clock mins={mins} secs={secs}></Clock>
                    <CurrentGameInfo userPlay={userPlay} />
                </div>
                    <QuestionInput  firstValue={firstValue} setFirstValue={setFirstValue} secondValue={secondValue} setSecondValue={setSecondValue} firstChoice={firstChoice} secondChoice={secondChoice} submitQuest={submitQuest} answer={answer} questionStatus={questionStatus} questCounter={questCounter} mode={mode} />
            </div>
                         
            </SwipeableDrawer> 
                            
        </React.Fragment>
        </Paper>
    </div>
        <div>
            {(tryAgain === true) && <TryAgain oneTry={oneTry} openTryDialog={openTryDialog} setOpenTryDialog={setOpenTryDialog} />}
            {(haveWinner === true) && <WinnerDialog time={timeNeeded} getRandomChar={getRandomChar}  questCounter={questCounter}/> }
            {(haveLoser === true) && <LoserDialog  getRandomChar={getRandomChar} />}
            
          </div>
        
    </ThemeProvider>
    )
}
export default Game