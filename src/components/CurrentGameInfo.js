import style from './CurrentGameInfo.module.css'
import { Avatar } from '@mui/material';
import { useUserContext } from '../context/UserContextProv';

function CurrentGameInfo ({userPlay}) {
    const currentUser = useUserContext()
    const userImg = currentUser.profileImg
    return (
    <div className={style.currentGame}>
        <div>
        <Avatar   src={`0${userImg}.png`} alt={userPlay}/>
        <span className={style.userName}>{userPlay} </span>
        </div>
        
    </div>
    )
}
export default CurrentGameInfo