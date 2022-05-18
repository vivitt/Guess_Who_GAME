import * as React from 'react';
import { useEffect, useState } from "react"
import characters from "../characters"
import Char  from  "../components/Char"
// import Select from "../components/Select"
import { firstChoice, secondChoice } from "../QuestOptions"
// import GetAnswer from '../GetAnswer'
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
import HowToPlayDialog from "../components/HowToPlayDialog"
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
function Game ({mode, setMode}) {
    // ////DIALOG
    // const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    //USERNAME
    const currentUser = useUserContext()
    const userPlay = currentUser.userName.charAt(0).toUpperCase() + currentUser.userName.slice(1);
    const [seconds, setSeconds] = useState(0);
    
    ////////////////////////////////////
    const [ currentChars, setCurrentChars ] = useState([])
    const [ firstValue, setFirstValue ] = useState('')
    const [ secondValue, setSecondValue ] = useState('')
    const [ questionStatus, setQuestionStatus ] = useState('')
    const [ questCounter, setQuestCounter ] = useState(0);
    const [ answer, setAnswer ] = useState('')
    const [ timeNeeded, setTimeNeeded ] = useState(0)
    const [haveWinner, setHaveWinner ] = useState(false);
    const [ haveLoser, setHaveLoser ] = useState(false)

    ////\\\\char to guess
    const charToGuess = useSelectedCharContext()
    ////////////////////////////////////
    const getRandomChar = () => {
        setHaveLoser(false);
        setHaveWinner(false);
        setTries(0)
        setSeconds(0)
        setQuestCounter(0)
     
        const len = characters.length;
        const random = characters[Math.floor(Math.random() * len)]
        charToGuess.setSelectedChar({...random})
        //console.log(selectedChar)
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
        // console.log(questionStatus)
        console.log(quest)
        setFirstValue('00')
        setSecondValue('')
    } 
}
    function getAnswer(quest) {
        //setAnswer('')
        let currentQuest = quest.firstValue + quest.secondValue;
        // console.log('1', selectedChar.id)
        console.log(currentQuest)
        let check = (Object.keys(charToGuess.selectedChar).find((key) => key === currentQuest))
        if (charToGuess.selectedChar[check] == true) {
            //console.log(selectedChar[check])
            setAnswer('Yes')
        } else {
            setAnswer('No')
                //console.log('3', selectedChar.id)
        }
 
    
    }
    //////////////////////////////////////////////////////

    ///\\\\\\ GUESS ////////\\\\\\\\\

    const [ guess, setGuess ] = useState('')
    const [ tries, setTries ] = useState(0)
    function submitGuess(e) {
        e.preventDefault();
        if (guess !== '')
        setTries(tries+1)
        setGuess('')
        console.log(guess)
        console.log(charToGuess.selectedChar.id)
        if (guess.toUpperCase() === charToGuess.selectedChar.id) {
            setHaveWinner(true);
            console.log('winner')
            console.log(questCounter)
            setTimeNeeded(Math.ceil(seconds/60))
            setSeconds(0)
        } else if (mode ==='easy' && tries === 2) {
            setHaveLoser(true)
        } else if (mode === 'hard' && tries === 0){
            setHaveLoser(true)
        } 
    }
 
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
    console.log(state)
  };



  ////////////////////////////////////
    return (
        <ThemeProvider theme={theme}>
            
            <Paper sx={{backgroundColor: theme.palette.primary.contrastText}} >
            <div className='game'>
            <div className="game-main"> { characters.map(char => ( <Char char={char}  /> )) } </div>
               
                    
                        {['left', 'right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                           
                            
                          
                            
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                                >
                                <div className="rigth-game">
                                    <div className="playerArea">
                                    <Clock mins={mins} secs={secs}></Clock>
                                    <CurrentGameInfo userPlay={userPlay} />
                                    </div>
                                    <QuestionInput  firstValue={firstValue} setFirstValue={setFirstValue} secondValue={secondValue} setSecondValue={setSecondValue} firstChoice={firstChoice} secondChoice={secondChoice} submitQuest={submitQuest} answer={answer} questionStatus={questionStatus} questCounter={questCounter} mode={mode} />
                                </div>
                            </SwipeableDrawer>
                          
                            
                            
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                                >
                                  <div className="playerArea">
                                    <Clock mins={mins} secs={secs}></Clock>
                                    <CurrentGameInfo userPlay={userPlay} />
                                    </div>
                                <GuessSection guess={guess} setGuess={setGuess} submitGuess={submitGuess} tries={tries} mode={mode} />
                            </SwipeableDrawer> 
                            
                            </React.Fragment>
                            ))}
                    
                    </div>
                </Paper>
            <div>
            {(haveWinner === true) && <WinnerDialog time={timeNeeded} getRandomChar={getRandomChar}  questCounter={questCounter}/> }
            {(haveLoser === true) && <LoserDialog  getRandomChar={getRandomChar} />}
            
          </div>
        
        </ThemeProvider>
    )
}
export default Game