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


function Game () {
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
           /////\\\\\\\ Q & A ////////\\\\\\\
    
    function submitQuest(e) {
        e.preventDefault();
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
        setTries(tries+1)
        setGuess('')
        if (guess == charToGuess.selectedChar.id) {
            setHaveWinner(true);
            console.log('winner')
            console.log(questCounter)
            setTimeNeeded(Math.ceil(seconds/60))
            setSeconds(0)
        } else if (tries === 2) {
            setHaveLoser(true)

            
        }
    }
    
    return (
        <div>
            <h2>Guess who GAME</h2>
            <h3>{userPlay} is playing</h3>
            <div className="game-main">
               {characters.map(char => ( <Char char={char} /> )) }
            </div>
            <div className="question">
                <form>
                    <span>Does this person have     
                        <select  value={firstValue} onChange={(e)=>setFirstValue(e.target.value)} >
                            {Object.keys(firstChoice).map((key) => (<option value={firstChoice[key]}>{key}</option>))}
                        </select> 
                        <select  value={secondValue} onChange={(e)=>setSecondValue(e.target.value)} >
                            {Object.keys(secondChoice).map((key) => (<option value={secondChoice[key]}>{key}</option>))}
                        </select> 
                        ? 
                    </span>
                    <button onClick={submitQuest}>Send</button>
                </form>
            </div>
            
            {
            (questionStatus !== '') &&
            <div className="answer">
                <span>
                    { (questionStatus === 'error') 
                    ? <p>This is not a valid question... Please try adding a word</p>
                    : <p>The answer to your last question is: {answer} </p> 
                    }
                </span>
            </div>
            }

            <div className="guess">
                <form>
                    <input type='text' value={guess} onChange={(e)=>setGuess(e.target.value)}></input>
                    <button onClick={submitGuess}>Try</button>
                    <p>You have used {tries}/3 tries</p>
                </form>
            </div>
            <div>
            {(haveWinner === true) && <WinnerDialog time={timeNeeded} questCounter={questCounter} getRandomChar={getRandomChar}  /> }
            {(haveLoser === true) && <LoserDialog getRandomChar={getRandomChar} />}
            </div>
        </div>
    )
}
export default Game