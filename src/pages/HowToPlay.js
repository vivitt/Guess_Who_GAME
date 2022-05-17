import { NavLink } from "react-router-dom"
import { Paper  } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core';
import { useUserContext } from "../context/UserContextProv"
//import VisibilityIcon from '@mui/icons-material/Visibility';
import theme from '../theme';



const HowToPlay = () => {

    const currentUser = useUserContext();
    return (
        <ThemeProvider theme={theme}>
        <div className="howToPlay">
        <Paper>
        <div className="instrucctions">
            <h2>How to Play</h2>
            <p>The goal in this game is to guess the person by asking questions and discarding characters. <br/>Clicking in a character will toggle their discard state. </p>
            <img></img>
            <p>You can make as many questions as you want in the EASY mode and 5 questions in the HARD mode.</p>
            <p>When have an idea, you can write the person name in the guess field and try...<br/>
            But be aware you only have 3(EASY) or 1 (HARD) tries to guess!</p>
            <p>Hope you enjoy playing!</p>

            <p><span>Bring me </span>
                {(currentUser.userName) && 
                <span> <NavLink to='/game' >Back</NavLink> to the game... </span>}
                {(!currentUser.userName) &&
                <span><NavLink to='/' >Back</NavLink> to the homepage... </span>
} </p>
        </div>
        </Paper>
        </div>
        </ThemeProvider>
    )
}

export default HowToPlay