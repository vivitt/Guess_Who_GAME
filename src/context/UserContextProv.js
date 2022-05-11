import React, { useContext, useState } from "react";

export const UserContext = React.createContext({});

export const UserContextProv = ({ children }) => {

    //User
    const [userName, setUserName] = useState("");
    console.log(userName)
  
    return (
      <UserContext.Provider value={{userName, setUserName}} >
        {children}
      </UserContext.Provider>
    );
  }
  
export const useUserContext = () => useContext(UserContext)
export default UserContextProv