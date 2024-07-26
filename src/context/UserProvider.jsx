import React, { createContext, useEffect, useState } from 'react'
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        const getUserData = async () => {
            try {
                await fetch('http://127.0.0.1:5500/src/data/user.json')
                    .then(response => response.json())
                    .then(data => setUserData(data))
            } catch (error) {
                console.error('Error fetching the data:', error);
            }
        };
        getUserData();
    }, []);
    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}