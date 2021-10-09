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

    const [userProfile, setUserProfile] = useState(null)
    const [signInMethod, setSignInMethod] = useState(null)


    useEffect(() => {
        try {
            var userInLocalStorage = window.localStorage.getItem(StatesOfApplicacion.userProfile)
            setUserProfile(JSON.parse(userInLocalStorage))
        } catch (error) {
            console.error(error);
        }
    }, [])

    const saveProfile = (profile) => {
        setUserProfile(profile);
        window.localStorage.setItem(StatesOfApplicacion.userProfile, JSON.stringify(profile))
    }

    const removeProfile = () => {
        setUserProfile(null);
        window.localStorage.removeItem(StatesOfApplicacion.userProfile)
        window.localStorage.removeItem(StatesOfApplicacion.signOutGoogle1Key)
    }

    const saveSignInMethod = (signInMethod) => {
        setSignInMethod(signInMethod);
    }

    const value = {
        userProfile,
        signInMethod,
        saveProfile,
        removeProfile,
        saveSignInMethod
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
