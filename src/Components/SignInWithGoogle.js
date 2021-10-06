import React, { useRef, useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { useAuth, SignInMethod } from "../Contexts/AuthContext"

export default function SignInWithGoogle() {

  const { loginGoogle } = useAuth()
  const [currentUser, setCurrentUser] = useState()
  const [userProfile, setUserProfile] = useState()
  const [loading, setLoading] = useState()
  const [signInMethod, setSignInMethod] = useState()

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '436064921337-pdu1pag3mte2vqhkpchimks3np46vp94.apps.googleusercontent.com'
      }).then(() => {
        window.gapi.signin2.render('my-signIn', {
          'scope': 'profile email',
          'width': 250,
          'height': 50,
          'longtitle': false,
          'theme': 'dark',
          'onsuccess': onsuccess,
          'onfailure': onfailure
        })
      })
    })
  }, []);

  function onsuccess(googleUser) {
    // e.preventDefault()
    // const aGoogleUser = googleUser.getAuthResponse();

    console.log('onsuccess')
    // console.log(aGoogleUser);
    // setCurrentUser(aGoogleUser)
    // setUserProfile(aGoogleUser);
    // setSignInMethod(SignInMethod.Google);
    // setLoading(true)

    // console.log(currentUser);

    loginGoogle(googleUser)
  }


  function onfailure() {
    console.log('onfailure')
  }

  function returnStates() {
    console.log('return states');
  }

  return (
    <div id="my-signIn" />
  )


}
