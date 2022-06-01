import React, { useContext, useState, useEffect } from "react";

export const UserContext = React.createContext({});

export const UserContextProv = ({ children }) => {
  //User
  const [userName, setUserName] = useState('');
  const [profileImg, setProfileImg] = useState("1")
  useEffect(() => {
    const currentPlayer = sessionStorage.getItem('CURRENT_PLAYER')
    
    if (currentPlayer) setUserName(currentPlayer)
    
  }, [])
  useEffect (() => {
   sessionStorage.setItem('CURRENT_PLAYER', userName )
  }, [userName]);

  return (
      <UserContext.Provider value={{userName, setUserName, profileImg, setProfileImg}} >
        {children}
      </UserContext.Provider>
    );
}
  
export const useUserContext = () => useContext(UserContext)
export default UserContextProv