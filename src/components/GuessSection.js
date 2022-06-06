import { TextField, Button, FormControl } from '@mui/material'
import style from './GuessSection.module.css'

function GuessSection ({guess, setGuess, submitGuess, tries, mode}) {
    return (
        <div className={style.guess}>
            <h3>Try to Guess</h3>
             <FormControl>
                <TextField value={guess}  label="ENTER A NAME" onChange={(e)=>setGuess(e.target.value)} sx={{backgroundColor: '#FFF176'}}></TextField>
                <Button onClick={submitGuess} variant="contained" color="secondary"  >Try</Button>
            </FormControl>
            {(mode === 'easy') && <h4>{tries}/3</h4>}
            {(mode === 'hard') && <h4>{tries}/1</h4>}
        </div>
    )
}

export default GuessSection