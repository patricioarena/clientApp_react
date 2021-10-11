import React from 'react'
import { Button } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'

import { AuthContext, SignInMethod } from "../Contexts/AuthContext"
import StatesOfApplicacion from '../StatesOfApplication'

const LoginControl = () => {


    const { userToken, signInMethod, removeToken } = AuthContext()

    // console.log(userToken);

    const history = useHistory()


    const renderSignInDefault = () => {
        return (
            <Link to="/login">
                <Button className="w-100" onClick={ () => {}}>Sign In</Button>
            </Link>
        )
    }

    const renderSignOutGoogleButton = () => {
        return (
            <Link to="/login">
                <Button className="w-100" onClick={() => {
                    removeToken();
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

    if (userToken == null && signInMethod == null) {
        return renderSignInDefault();
    }

    if (userToken == null && signInMethod === SignInMethod.Google) {
        return renderSignInGoogleButton()
    } else {
        return renderSignOutGoogleButton()
    }


}

export default LoginControl;
