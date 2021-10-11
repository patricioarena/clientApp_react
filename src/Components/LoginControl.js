import React from 'react'
import { Button } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'

import { AuthContext, SignInMethod } from "../Contexts/AuthContext"
import StatesOfApplicacion from '../StatesOfApplication'

const LoginControl = () => {


    const { userProfile, signInMethod, removeProfile } = AuthContext()

    // console.log(userProfile);

    const history = useHistory()



    const renderSignOutGoogleButton = () => {
        return (
            <Link to="/login">
                <Button className="w-100" onClick={() => {
                    removeProfile();
                    window.localStorage.setItem(StatesOfApplicacion.signOutGoogle2Key, StatesOfApplicacion.signOutGoogle2Value)
                }}>Sign Out</Button>
            </Link>
        )
    }

    const renderSignInGoogleButton = () => {
        return (
            <Link to="/login">
                <Button className="w-100" onClick={
                    window.localStorage.setItem(StatesOfApplicacion.signOutGoogle1Key, StatesOfApplicacion.signOutGoogle1Value)
                }>Sign In</Button>
            </Link>
        )
    }

    if (userProfile == null && signInMethod === SignInMethod.Google) {
        return renderSignInGoogleButton()
    } else {
        return renderSignOutGoogleButton()
    }


}

export default LoginControl;
