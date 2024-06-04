import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userToken, setUserToken] = useState(null)
  const [userData, setUserData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const getUserData = async () => {
    const localUserToken = localStorage.getItem('userToken');
    if (localUserToken) {
      const headers = { Authorization: `group__${localUserToken}` }
      
      const { data } = await axios.get(`http://localhost:4000/profile`, { headers: headers })
    
      setUserToken(localUserToken)
      setUserData(data.user);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, [userToken])

  return (
    <UserContext.Provider value={{ userToken, setUserToken, userData, setUserData, Loading }}>
      {children}
    </UserContext.Provider>
  );
}