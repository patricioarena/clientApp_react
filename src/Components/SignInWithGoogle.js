import React, { useRef, useState, useEffect } from "react"
import { Button } from "react-bootstrap"

import { useDispatch, useSelector } from 'react-redux'
import { actionSignInWithGoogle, actionLogOut, actionReset } from '../redux/reducers/authReducer'

const SignInWithGoogle = () => {

  const logOutGoogle = useSelector(store => store.auth.logOutGoogle);
  const [isSignedIn, setSignedIn] = useState(false)
  const auth = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '436064921337-pdu1pag3mte2vqhkpchimks3np46vp94.apps.googleusercontent.com',
        scope: 'profile email',
      }).then(() => {
        auth.current = window.gapi.auth2.getAuthInstance();
        setSignedIn(auth.current.isSignedIn.get());
        auth.current.isSignedIn.listen(onAuthChange)
      })
    })
  }, [isSignedIn]);

  const onAuthChange = () => {
    setSignedIn(auth.current.isSignedIn.get())

    // var token = auth.current.currentUser.get().getAuthResponse();
    var profile = auth.current.currentUser.get().getBasicProfile();

    if (auth.current.isSignedIn.get() == true) {
      localStorage.setItem('profile', JSON.stringify(profile))
      dispatch(actionSignInWithGoogle(profile))
    }
    else if (isSignedIn == false) {
      dispatch(actionLogOut(null))
    }
    else {
      dispatch(actionLogOut(null))
    }
  }

  const onSignOutClick = () => {
    auth.current.signOut()
  }

  const onSignInClick = () => {
    auth.current.signIn()
  }

  if (logOutGoogle == true) {
    try {
      auth.current.signOut()
      dispatch(actionReset(null))
    } catch (error) {
    }
  }

  if (isSignedIn === null) {
    return null
  } else if (isSignedIn) {
    return (
      <Button onClick={onSignOutClick} className="w-100">
        Sign Out
        <i className="fas fa-sign-in-alt fa-fw" />
      </Button>
    )
  } else {
    return (
      <Button onClick={onSignInClick} className="w-100">
        <i className="fab fa-google fa-fw" />
        Sign In
      </Button>
    )
  }

}

export default SignInWithGoogle;