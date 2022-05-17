import React, { useContext, useState } from "react";

export const UserContext = React.createContext({});

export const UserContextProv = ({ children }) => {

    //User
    const [userName, setUserName] = useState("");
    const [profileImg, setProfileImg] = useState("1")
    
  
    return (
      <UserContext.Provider value={{userName, setUserName, profileImg, setProfileImg}} >
        {children}
      </UserContext.Provider>
    );
  }
  
export const useUserContext = () => useContext(UserContext)
export default UserContextProv