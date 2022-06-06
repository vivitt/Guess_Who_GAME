import styles from './QuestionInput.module.css'
import { Button, Select, MenuItem } from '@mui/material'
import { useSoundContext } from '../context/SoundContext';
function QuestionInput ({questionStatus, firstValue, setFirstValue, firstChoice, secondValue, setSecondValue, secondChoice, submitQuest, answer, mode, questCounter}) {
    const sound = useSoundContext()
    return (
        <div className={styles.questSection}>
            <div className={styles.question}>
                <span className={styles.title}>Ask a QUESTION</span>
                <div className={styles.questQuant}>
                    {(mode === 'easy') && <p>{questCounter}/∞</p>}
                    {(mode === 'hard') && <p>{questCounter}/5</p>}
                </div>
                <form >
                    <p className={styles.text}>Does this person have</p>     
                    <div className={styles.input} >
                        {
                        (mode === 'hard' && questCounter === 5) 
                        ? <Select disabled variant="standard" value={firstValue} onChange={(e)=>{setFirstValue(e.target.value);(sound.mute === false) && sound.btnClick()}} >
                        {Object.keys(firstChoice).map((key) => (<MenuItem value={firstChoice[key]}>{key}</MenuItem>))}
                        </Select> 
                        :<Select variant="standard" value={firstValue} onChange={(e)=>{setFirstValue(e.target.value);(sound.mute === false) && sound.btnClick()}} >
                        {Object.keys(firstChoice).map((key) => (<MenuItem value={firstChoice[key]}>{key}</MenuItem>))}
                        </Select> 
                        }
                    </div>
                    <div className={styles.input} >
                        { (mode === 'hard' && questCounter === 5) 
                        ?<Select  disabled variant="standard" value={secondValue} onChange={(e)=> { setSecondValue(e.target.value) ;(sound.mute === false) && sound.btnClick()}} >
                        {Object.keys(secondChoice).map((key) => (<MenuItem value={secondChoice[key]}>{key}</MenuItem>))}
                        </Select> 
                        :<Select   variant="standard" value={secondValue} onChange={(e)=> { setSecondValue(e.target.value) ;(sound.mute === false) && sound.btnClick()}} >
                        {Object.keys(secondChoice).map((key) => (<MenuItem value={secondChoice[key]}>{key}</MenuItem>))}
                        </Select> 
                        }
                    </div>
                   
                    <Button variant="contained" color="primary" onClick={submitQuest}>Ask <span className={styles.questMark}>
                    ? 
                    </span></Button>
                </form>
                
                 

                
                <div className={styles.answer}>
                    <span>
                     { (questionStatus === 'error') && <p>This is not a valid question... Please try again</p>
                        // : <p className={styles.yOrN}>{answer} </p> 
                    }
                    </span>
                </div>
                
                
                {
                    (mode === 'hard' && questCounter === 5) && <div className={styles.answer}>You can not ask more questions</div>
                }
            </div>
        </div>
    )
}

export default QuestionInput