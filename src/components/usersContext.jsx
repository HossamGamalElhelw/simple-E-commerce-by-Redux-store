import React, { useEffect ,useState,createContext, Children } from 'react'
import { useContext } from 'react';

export const UsersContext = createContext();

export const UserProvider = ({children}) => {

    const [user , setUser] = useState(null);

    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if(storedUser) setUser(JSON.parse(storedUser));
    },[])

    return(
        <UsersContext.Provider value={{user,setUser}}>
            {children}
        </UsersContext.Provider>
    )
}