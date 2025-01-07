import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Create UserContext
const UserContext = createContext();

// AuthProvider Component
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const verifyUser = async () => {

            
            try {
                const token = localStorage.getItem('token');
                if(token) {
                const response = await axios.get('http://localhost:5000/api/auth/verify',{
                 
                headers:{
                    Authorization: `Bearer ${token}`,
                }}
            )
    

                if (response.data.success) {
                    setUser(response.data.user);
                } else {
                    setUser(null);
                    setLoading(false);
                }}
                
            } catch (error) {
            
                if (error.response && !error.response.data.success) {
                    setUser(null);
                }
            } finally{
                setLoading(false);
            }
        };

        verifyUser();
    }, []);

    // Login function
    const login = (user) => {
        setUser(user);
    // Save token for persistence
    };

    // Logout function
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token'); // Clear token
    };

    // Providing context value
    return (
        <UserContext.Provider value={{ user, login, logout , loading}}>
            {children}
        </UserContext.Provider>
    );
};

// Custom Hook to Use Auth
export const useAuth = () => useContext(UserContext);

export default AuthProvider;
