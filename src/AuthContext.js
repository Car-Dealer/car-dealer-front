import React, { useState, useEffect } from 'react'
import {app} from "./Fire"

export const AuthContext = React.createContext();

export function AuthProvider(props) {
    const [auth, setAuth] = useState({

    });
    const [user, setUser] = useState({

    });


    useEffect(() => {
        
        app.auth().onAuthStateChanged(setUser);

        // const token = localStorage.getItem('token');

        // if (token) {
        //     setAuth({ token });
        // }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth, user, setUser, setSearch, search }}>
            {props.children}
        </AuthContext.Provider>
    )
}