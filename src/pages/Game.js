import * as React from 'react';
import { useEffect, useState } from "react"
import characters from "../characters"
import Char  from  "../components/Char"
import { firstChoice, secondChoice } from "../QuestOptions"
import { useUserContext } from "../context/UserContextProv"
import { useSelectedCharContext } from "../context/SelectedCharContx";
import { Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';
import QuestionInput from "../components/QuestionInput"
import CurrentGameInfo from "../components/CurrentGameInfo"
import GuessSection from "../components/GuessSection"
import Clock from "../components/Clock"
import EndDialog from '../components/EndDialog';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button } from "@material-ui/core";
import FaceIcon from '@mui/icons-material/Face';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useSoundContext } from '../context/SoundContext';

import PlayingDialog from '../components/PlayingDialog';

function Game ({mode, setMode}) {

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
    const [openAnswerDialog, setOpenAnswerDialog] = React.useState(true);
    const [openTryAgainDialog, setOpenTryAgainDialog] = React.useState(true);
    const [ discardedChars, setDiscardedChars] = useState([]);
    
    ///////SOUND/////////////////////
    const sound = useSoundContext()

    ////\\\\char to guess
    const charToGuess = useSelectedCharContext()
    const [ question, setQuestion ] = useState([])
    ////////////////////////////////////
    const getRandomChar = () => {
        setHaveLoser(false);
        setHaveWinner(false);
        setTries(0)
        setSeconds(0)
        setQuestCounter(0)
        setDiscardedChars([])
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
        
        setOpenAnswerDialog(true)
        if (mode === 'easy' || mode === 'hard' && questCounter < 5) {
        setQuestionStatus('')
        const quest = {firstValue , secondValue}
        if ( secondValue === '') {
            setQuestionStatus('error')
            if (sound.mute === false) sound.wrong()
        } else {
            toggleDrawerOnDialog('left', false)
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
        setQuestion([quest.firstValue,quest.secondValue])

        let check = (Object.keys(charToGuess.selectedChar).find((key) => key === currentQuest))
        if (charToGuess.selectedChar[check] == true) {
            
            setAnswer('Yes')
            if (sound.mute === false) sound.right()
        } else {
            setAnswer('No')
            if (sound.mute === false) sound.right()
                
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
        setOpenTryAgainDialog(true)
        if (guess !== '')
            setTries(tries+1)
            setOneTry(guess)
            setGuess('')
            toggleDrawerOnDialog('right', false)
       
            if (guess.toUpperCase() !== charToGuess.selectedChar.id) {
                if (mode ==='easy' && tries === 2) {
                setHaveLoser(true)
                if (sound.mute === false) sound.loser();
            } else if (mode === 'hard' && tries === 0){
                setHaveLoser(true)
                if (sound.mute === false) sound.loser();
            } else {
            setTryAgain(true);
            if (sound.mute === false) sound.loser();
        } 
    }
        else { 
       
            setHaveWinner(true);
            if (sound.mute === false) sound.winner();
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
    if (sound.mute === false) sound.btnClick()
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
          
            <div className="game-main"> { characters.map(char => ( <Char discardedChars={discardedChars} setDiscardedChars={setDiscardedChars} char={char}  /> )) } </div>
           
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
        <div> {
            (questionStatus === 'ok') && <PlayingDialog open={openAnswerDialog} setOpen={setOpenAnswerDialog} text={(answer === 'Yes')
            ? `This person has ${Object.keys(firstChoice).find(key => firstChoice[key] === question[0])} ${Object.keys(secondChoice).find(key => secondChoice[key] === question[1])}` 
            :`No ${Object.keys(firstChoice).find(key => firstChoice[key] === question[0])} ${Object.keys(secondChoice).find(key => secondChoice[key] === question[1])}` } title={answer}></PlayingDialog>}
        </div>
        <div>
            {/* {(tryAgain === true) && <TryAgain oneTry={oneTry} openTryDialog={openTryDialog} setOpenTryDialog={setOpenTryDialog} />} */}
            {(tryAgain === true) && <PlayingDialog open={openTryAgainDialog} setOpen={setOpenTryAgainDialog} text={`It's not ${oneTry.toUpperCase()}`} title={'No :('}></PlayingDialog>}
            {(haveWinner === true) && <EndDialog  getRandomChar={getRandomChar} text={`You guessed in ${timeNeeded} minutes and ${questCounter} questions`}  title={`Yes!! Is ${charToGuess.selectedChar.id} ` } /> }
            {(haveLoser === true) && <EndDialog  text={'Run out of tries'}  title={":( "}   getRandomChar={getRandomChar} />}
            
          </div>
        
    </ThemeProvider>
    )
}
export default Game