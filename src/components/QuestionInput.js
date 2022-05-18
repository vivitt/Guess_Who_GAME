import styles from './QuestionInput.module.css'
import { Button, Select, MenuItem } from '@material-ui/core'
import { StyleRounded } from '@mui/icons-material'
import { style } from '@mui/system'



function QuestionInput ({questionStatus, firstValue, setFirstValue, firstChoice, secondValue, setSecondValue, secondChoice, submitQuest, answer, mode, questCounter}) {
    return (
        <div className={styles.questSection}>
                    
            <div className={styles.question}>
                <span className={styles.title}>Ask a QUESTION</span>
                <form>
                    <p className={styles.text}>Does this person have</p>     
                    <div className={styles.input} >
                        <Select variant="standard" autoWidth="true" value={firstValue} onChange={(e)=>setFirstValue(e.target.value)} >
                        {Object.keys(firstChoice).map((key) => (<MenuItem value={firstChoice[key]}>{key}</MenuItem>))}
                        </Select> 
                    </div>
                    <div className={styles.input} >
                        <Select  value={secondValue} onChange={(e)=>setSecondValue(e.target.value)} >
                        {Object.keys(secondChoice).map((key) => (<MenuItem value={secondChoice[key]}>{key}</MenuItem>))}
                        </Select> 
                    </div>
                   
                    <Button variant="contained" color="primary" onClick={submitQuest}>Ask <span className={styles.questMark}>
                    ? 
                    </span></Button>
                </form>
                <div className={styles.questQuant}>
                    {(mode === 'easy') && <p>{questCounter}/∞</p>}
                    {(mode === 'hard') && <p>{questCounter}/5</p>}
                </div>
                {
                    (mode === 'hard' && questCounter === 5) && <div>You can not ask more questions</div>
                }
                 {

(questionStatus !== '') &&
<div className={styles.answer}>
<span>
    { (questionStatus === 'error') 
    ? <p>This is not a valid question... Please try again</p>
    : <p className={styles.yOrN}>{answer} </p> 
    }
</span>
</div>
}
            </div>
           


</div>
    )
}

export default QuestionInput