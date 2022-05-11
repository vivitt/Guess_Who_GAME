import React from "react"
import { useState, useNavigate } from "react"


function Start () {
    const [ userName, setUserName ] = useState("")
    const [ value, setValue ] = useState("")

    const navigate = useNavigate();
    function submitName(event) {
        event.preventDefault()
        setUserName(value);
        const userPlay = userName.charAt(0).toUpperCase() + userName.slice(1)
        ;
        setValue("")
        console.log(userPlay)
    }
    
    return (
        <>
        <div className="startGame">
            <div className="getUserName">
                <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
        
                <button onClick={submitName}>Add!</button>
            </div>
            
        </div>
        {
            (userName) && <div>
                <p>Hi, {userName}</p>
                <button onClick={navigate('/game')}>PLAY</button>
                <button >?</button>
            </div>
        }
        </>
    )

}


export default Start