import style from './CurrentGameInfo.module.css'
import { Avatar } from '@mui/material';

function CurrentGameInfo ({userPlay}) {
    return (
    <div className={style.currentGame}>
        <div>
        <Avatar   src="../imgs/00_1.png" alt={userPlay}/>
        <span className={style.userName}>{userPlay} </span>
        </div>
        
    </div>
    )
}
export default CurrentGameInfo