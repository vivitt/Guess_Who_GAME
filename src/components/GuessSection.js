import { TextField, Button } from '@material-ui/core'
import style from './GuessSection.module.css'
function GuessSection ({guess, setGuess, submitGuess, tries, mode}) {
    return (
        <div className={style.guess}>
        
        <h3>Try to Guess</h3>
        <form>
            <TextField value={guess} label="Enter the name of the person" onChange={(e)=>setGuess(e.target.value)}></TextField>
            <Button onClick={submitGuess} variant="contained" color="secondary"  >Try</Button>
        </form>
        {(mode === 'easy') && <h4>{tries}/3</h4>}
        {(mode === 'hard') && <h4>{tries}/1</h4>}
    </div>
    )
}

export default GuessSection