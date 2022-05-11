import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../context/UserContextProv"


function Home () {
    
    const currentUser = useUserContext()
    const [ value, setValue ] = useState("")

    const navigate = useNavigate();
    
    function submitName(event) {
        event.preventDefault()
        currentUser.setUserName(value);
        const userPlay = currentUser.userName.charAt(0).toUpperCase() + currentUser.userName.slice(1)
        ;
        setValue("")
        console.log(userPlay)
    }
    const navHowToPlay = () => navigate('/howtoplay')
    const navGame = () => navigate('/game')
    return (
        <>
        <div className="startGame">
            <div className="getUserName">
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        
                <button onClick={submitName}>Add!</button>
            </div>
            
        </div>
        {
            (currentUser.userName) && <div>
                <p>Hi, {currentUser.userName}</p>
                <button onClick={navGame}>PLAY</button>
                <button onClick={navHowToPlay} >?</button>
            </div>
        }
        </>
    )

}


export default Home