import { NavLink } from "react-router-dom"
import { Paper  } from '@mui/material'
import { ThemeProvider } from '@mui/material';
import { useUserContext } from "../context/UserContextProv"
//import VisibilityIcon from '@mui/icons-material/Visibility';
import theme from '../theme';



const NotFound = () => {

    const currentUser = useUserContext();
    return (
        <ThemeProvider theme={theme}>
        <div className="startGame">
        <Paper>
        <div className="notFound">
        
        <div className='text'>
                <h2>PAGE<br/>
                NOT<br/>
                FOUND</h2>
               
                    <div className="back">
                    {(currentUser.userName) && 
                    <span> <NavLink to='/game' >Back</NavLink> to the game... </span>}
                    {(!currentUser.userName) &&
                    <span><NavLink to='/' >Back</NavLink> to the homepage... </span>}
                    </div>
                </div>
              
                </div>
        
        </Paper>
        </div>
        </ThemeProvider>
    )
}

export default NotFound