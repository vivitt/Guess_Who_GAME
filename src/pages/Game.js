


import { useEffect, useState } from "react"
import characters from "../characters"
import Char  from  "../components/Char"
// import Select from "../components/Select"
import { firstChoice, secondChoice } from "../QuestOptions"
// import GetAnswer from '../GetAnswer'
import { useUserContext } from "../context/UserContextProv"
import WinnerDialog from '../components/MyDialog';





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
    const [haveWinner, setHaveWinner] = useState(false);
    ////////////////////////////////////
    
    ///GET RANDOM CHAR
    const [ selectedChar, setSelectedChar ] = useState({ 
        "id": '99', 
        '0041': false,
        "3141": false,
        "3241": false,
        //"hair-color": 0,
        '2141': false,
        "2241": false,
        "2341": false,
        "2441": false,
        "2541": false,
        "2641": false,
        "2741": false,
        "2841": false,
        "2941": false,
        "3041": false,
        '0042': false,
        '0043': false,
        '0044': false,
        '0045': false,
        '0046': false,
        //'0047': '',
        '2147': false,
        '2247': false,
        '2347': false,
        '2447': false,
        '2547': false,
        '2647': false,
        '2747': false,
        '2847': false,
        '2947':false,

        "image": "",
        "descr": ""
    })
    

        const getRandomChar = () => {
            const len = characters.length;
            const random = characters[Math.floor(Math.random() * len)]
            setSelectedChar({ 
                "id": random.id, 
                '0041': random['0041'],
                "3141": random['3141'],
                "3241": random['3241'],
                //"haircolor": 'random.haircolor,
                '2141': random['2141'],
                "2241": random['2241'],
                "2341": random['2341'],
                "2441": random['2441'],
                "2541": random['2541'],
                "2641": random['2641'],
                "2741": random['2741'],
                "2841": random['2841'],
                "2941": random['2941'],
                "3041": random['3041'],
                '0042': random['0042'],
                '0043': random['0043'],
                '0044': random['0044'],
                '0045': random['0045'],
                '0046': random['0046'],
                //'0047': random['0047'],
                '2147': random['2147'],
                '2247': random['2247'],
                '2347': random['2347'],
                '2447': random['2447'],
                '2547': random['2547'],
                '2647': random['2647'],
                '2747': random['2747'],
                '2847': random['2847'],
                '2947': random['2947'],
                "image": random.image,
                "descr": random.descr
            })
            console.log(selectedChar)
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
        let check = (Object.keys(selectedChar).find((key) => key === currentQuest))
        if (selectedChar[check] == true) {
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

    function submitGuess(e) {
        e.preventDefault();
        if (guess == selectedChar.id) {
            setHaveWinner(true);
            console.log('winner')
            console.log(questCounter)
            setTimeNeeded(seconds/60)
            setSeconds(0)
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
                </form>
            </div>
            <div>
            {(haveWinner === true) && <WinnerDialog time={timeNeeded} questCounter={questCounter} getRandomChar={getRandomChar} />
   

            }
            </div>
        </div>
    )
}
export default Game