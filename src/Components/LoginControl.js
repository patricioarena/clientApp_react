import React from 'react'
import { Button } from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { actionLogOut } from '../redux/reducers/authReducer'



const LoginControl = () => {

    const userProfile = useSelector(store => store.auth.userProfile);
    const history = useHistory()
    const dispatch = useDispatch();


    if (userProfile == null) {
        return (
            <Link to="/login">
                <Button className="w-100" onClick={  console.log('=>>') }>Sign In</Button>
            </Link>
        )
    } else {
            return (
                <Button className="w-100" onClick={ ()=>{dispatch(actionLogOut(null))} }>Sign Out</Button>
            )
        }


}

export default LoginControl;
