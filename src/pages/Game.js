
import { useEffect, useState } from "react"
import characters from "../characters"
import Char  from  "../components/Char"
// import Select from "../components/Select"
import { firstChoice, secondChoice } from "../QuestOptions"
// import GetAnswer from '../GetAnswer'
import { useUserContext } from "../context/UserContextProv"

function Game () {
    
    //USERNAME
    const currentUser = useUserContext()
    const userPlay = currentUser.userName.charAt(0).toUpperCase() + currentUser.userName.slice(1)
    ;
    
    ////////////////////////////////////
    const [ currentChars, setCurrentChars ] = useState([])
    const [ firstValue, setFirstValue ] = useState('')
    const [ secondValue, setSecondValue ] = useState('')
    const [ questionStatus, setQuestionStatus ] = useState('')
    const [ answer, setAnswer ] = useState('')
    ////////////////////////////////////
    
    ///GET RANDOM CHAR
    const [ selectedChar, setSelectedChar ] = useState({ 
        "id": 99, 
        '41': false,
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
        '42': false,
        '43': false,
        '44': false,
        '45': false,
        '46': false,
        '47': '',
        "image": "",
        "descr": ""})
    

        const getRandomChar = () => {
            const len = characters.length;
            const random = characters[Math.floor(Math.random() * len)]
            setSelectedChar({ 
                "id": random.id, 
                '41': random[41],
                "3141": random[3141],
                "3241": random[3241],
                //"haircolor": random.haircolor,
                '2141': random[2141],
                "2241": random[2241],
                "2341": random[2341],
                "2441": random[2441],
                "2541": random[2541],
                "2641": random[2641],
                "2741": random[2741],
                "2841": random[2841],
                "2941": random[2941],
                "3041": random[3041],
                '42': random[42],
                '43': random[43],
                '44': random[44],
                '45': random[45],
                '46': random[46],
                '47': random[47],
                "image": random.image,
                "descr": random.descr
            })
            console.log(selectedChar)
          };
        useEffect(() => {
            getRandomChar();
           }, [setSelectedChar])
    /////////////////////////////////////////////
 
    function submitQuest(e) {
        e.preventDefault();
        setQuestionStatus('')
        const quest = {firstValue , secondValue}
        if ( secondValue === '') {
            setQuestionStatus('error')
        } else {
            setQuestionStatus('ok')
            getAnswer(quest)
        }
        // console.log(questionStatus)
        console.log(quest)
        setFirstValue('')
        setSecondValue('')
    }
    
    function getAnswer(quest) {
        setAnswer('')
        console.log('1', selectedChar.id)
       if (quest.firstValue === '') {
            let check = (Object.keys(selectedChar).find((key) => key == quest.secondValue))
            //console.log(check) 
            if (selectedChar[check] === true)
            {
            console.log(selectedChar[check])
               setAnswer('Yes')
               console.log('2', selectedChar.id)
            // } else if (selectedChar[secondValue] == 'unknown')
            
            // {
            //     setAnswer(`We really don't know`)
            }else {
                setAnswer('No')
                console.log('3', selectedChar.id)
            }
           
       } else {
           setAnswer('workin on your answer')
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
                {(questionStatus === 'error') ?
                <p>This is not a valid question... Please try adding a word</p>
                
                : <p>The answer to your last question is: {answer} </p> 
                }
                </span>
            </div>
            }
        </div>
    )
}
export default Game