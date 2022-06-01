import React, { useContext, useState, useEffect} from "react";
import useSound from 'use-sound';
import Swipe from '../sounds/swipe.mp3'
import Winner from '../sounds/win.mp3'
import ButtonSound from '../sounds/button.mp3'
import Loser from '../sounds/lose.mp3';
import Right from '../sounds/right.mp3';
import Wrong from '../sounds/wrong.mp3'

export const SoundContext = React.createContext({});

export const SoundContextProv = ({ children }) => {
  
  const [ mute, setMute ] = useState(false)
  const [swipeImg] = useSound(
    Swipe,
    { volume: 0.25 }
  );
  const [btnClick] = useSound(
    ButtonSound,
    { volume: 0.25}
  );
  const [winner] = useSound(
    Winner,
    { volume: 0.25}
  );
  const [loser] = useSound(
    Loser, 
    { volume: 0.25 }

  );
  const [wrong] = useSound(
    Wrong, 
    { volume: 0.25 }

  );
  const [right] = useSound(
    Right, 
    { volume: 0.25 }

  );

  useEffect(() => {
    const soundS = window.localStorage.getItem('sound_mute')
    
    if (soundS !== null) {setMute(JSON.parse(soundS))}
}, [])

useEffect (() => {
    window.localStorage.setItem('sound_mute', JSON.stringify(mute))
  }, [mute]);


  return (
      <SoundContext.Provider value={{mute, setMute, btnClick, winner, swipeImg, loser, right, wrong}} >
        {children}
      </SoundContext.Provider>
    );
}
  
export const useSoundContext = () => useContext(SoundContext)
export default SoundContextProv