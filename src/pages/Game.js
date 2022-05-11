
import { useEffect, useState } from "react"
import characters from "../characters"
import Char  from  "../components/Char"
// import Select from "../components/Select"
import { firstChoice, secondChoice } from "../QuestOptions"
// import GetAnswer from '../GetAnswer'


function Game () {
    
    const [ selectedChar, setSelectedChar ] = useState({ 
        "id": 99, 
        "hair": false,
        "short-hair": false,
        "long-hair": false,
        "hair-color": '',
        "eyes-color": '',
        "glasses": false,
        "beard": false,
        "earrings": false,
        "hair-accessory": false,
        "braids": false,
        "image": "",
        "descr": ""})

    const [ currentChars, setCurrentChars ] = useState([])
    const [ firstValue, setFirstValue ] = useState('')
    const [ secondValue, setSecondValue ] = useState('')
    const [ questionStatus, setQuestionStatus ] = useState('')
    const [ answer, setAnswer ] = useState('')
    
    
    const getRandomChar = () => {
        const len = characters.length;
        const random = characters[Math.floor(Math.random() * len)]
        setSelectedChar({ 
            "id": random.id, 
            "hair": random.hair,
            "shorthair": random.shorthair,
            "longhair": random.longhair,
            "haircolor": random.haircolor,
            "eyescolor": random.eyescolor,
            "glasses": random.glasses,
            "beard": random.beard,
            "earrings": random.earrings,
            "hairaccessory": random.hairaccessory,
            "braids": random.braids,
            "image": random.image,
            "descr": random.descr
        })
        // console.log(selectedChar)
      };
      useEffect(() => {
        getRandomChar();
       }, {})

    //    (quest.firstValue === firstChoice[1] ||  quest.firstValue === firstChoice[2] || quest.firstValue === firstChoice[3]  || quest.firstValue === firstChoice[4] || quest.firstValue === firstChoice[5] || quest.firstValue === firstChoice[6] || quest.firstValue === firstChoice[7] || quest.firstValue === firstChoice[8] || quest.firstValue === firstChoice[9]) 
  
    function submitQuest(e) {
        
        e.preventDefault();
        setQuestionStatus('')
        const quest = {firstValue , secondValue}
        if ( firstValue < 32) {
            setQuestionStatus('error')
        } else {
            setQuestionStatus('ok')
        }
        console.log(questionStatus)
        console.log(quest)
        setFirstValue('')
        setSecondValue('')
        
    }
    function getAnswer(quest) {
       
    
        
     
       
        
    }



    return (
        <div>
            <h2>Guess who GAME</h2>
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
                            {Object.keys(secondChoice).map(item => (<option value={item}>{item}</option>))}
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
                <p>This is not a valid question... Please try again</p>
                
                : <p>The answer to your last question is:</p>
                        // {/* <p><Answer></Answer></p> */}

                }
                </span>
            </div>
            }
        </div>
    )
}
export default Game