import React, { useContext, useRef, useState, useEffect } from 'react'
import StatesOfApplicacion from '../StatesOfApplication'

import { UserRole } from "../Repository/UserRole";
import { UserCredentials } from "../Repository/UserCredentials";

export const SignInMethod = {
    EmailAndPassword: 'EmailAndPassword',
    Phone: 'Phone',
    Google: 'Google',
    Facebook: 'Facebook',
    Twitter: 'Twitter',
    GitHub: 'GitHub',
    Yahoo: 'Yahoo',
    Microsoft: 'Microsoft',
    Apple: 'Apple',
    Anonymous: 'Anonymous'
};

const Context = React.createContext()

export function AuthContext() {
    return useContext(Context);
}

export function AuthProvider({ children }) {

    const [userToken, setUserToken] = useState(null)
    const [signInMethod, setSignInMethod] = useState(null)


    useEffect(() => {
        try {
            var userTokenInLocalStorage = window.localStorage.getItem(StatesOfApplicacion.userToken)
            var userSignInMethod = window.localStorage.getItem(StatesOfApplicacion.signInMethod)

            setSignInMethod(JSON.parse(userSignInMethod))
            setUserToken(JSON.parse(userTokenInLocalStorage))
        } catch (error) {
            console.error(error);
        }
    }, [])

    const saveToken = (token) => {
        setUserToken(token);
        window.localStorage.setItem(StatesOfApplicacion.userToken, JSON.stringify(token))
    }

    const removeToken = () => {
        setUserToken(null);
        window.localStorage.removeItem(StatesOfApplicacion.userToken)
        window.localStorage.removeItem(StatesOfApplicacion.signInMethod)
        window.localStorage.removeItem(StatesOfApplicacion.signOutGoogle1Key)

    }

    const saveSignInMethod = (signInMethod) => {
        setSignInMethod(signInMethod);
        window.localStorage.setItem(StatesOfApplicacion.signInMethod, JSON.stringify(signInMethod))
    }

    const value = {
        userToken,
        signInMethod,
        saveToken,
        removeToken,
        saveSignInMethod
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
