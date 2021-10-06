import React, { useContext, useRef, useState, useEffect } from 'react'
import { UserRole } from "../Repository/UserRole";
import { UserCredentials } from "../Repository/UserCredentials";

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext);
}

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

export function AuthProvider({ children }) {
    const mountedRef = useRef(true);

    const [currentUser, setCurrentUser] = useState()
    const [userProfile, setUserProfile] = useState()
    const [loading, setLoading] = useState()
    const [signInMethod, setSignInMethod] = useState()

    function signup(email, password) {
        // return firebase.auth().createUserWithEmailAndPassword(email, password)
        //     .then(function (result) {
        //         // console.log("user created with credential", JSON.stringify(result));
        //         // var credential = result.credential;
        //         // var token = credential.accessToken;
        //         var user = result.user;
        //         window.localStorage.setItem('email', user.email);
        //         return new UserCredentials(user.uid, user.email, UserRole.Client);
        //     }).then((res) => {
        //         return insertIncollection('users', res).then((value) => { return value; });
        //     })
        //     .catch(function (error) {
        //         return false;
        //     });
    }

    function sendEmailVerification() { }

    function login(email, password) { }

    function loginGoogle(googleUser) {

        const aGoogleUser = googleUser.getAuthResponse();

        const simulateFetchData = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, 500);
        })

        return simulateFetchData().then(data => {
            if (data == true) {
                console.log("Document data:", data)
                setCurrentUser(aGoogleUser)
                setUserProfile(aGoogleUser);
                setSignInMethod(SignInMethod.Google);
                setLoading(true)

                if (userProfile != undefined) {
                    return true;
                }
                return true;
            };
            return false;
        })


        // var credential = firebase.auth.GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
        // return firebase.auth().signInWithCredential(credential)
        //     .then(function (result) {
        //         var user = result.user;
        //         db.collection('users').doc(user.uid)
        //             .get()
        //             .then(function (doc) {
        //                 if (doc.exists) {
        //                     // console.log("Document data:", doc.data());
        //                     setUserProfile(doc.data());
        //                     setSignInMethod(SignInMethod.Google);
        //                     setLoading(true)
        //                     return true;
        //                 } else {
        //                     console.log("No user in user collection");
        //                     window.localStorage.setItem('email', user.email);
        //                     var newDoc = new UserCredentials(user.uid, user.email, UserRole.Client);
        //                     return insertIncollection('users', newDoc).then((value) => { return value; });
        //                 }
        //             }).catch(function (error) {
        //                 console.error("Error getting document in user collection:", error);
        //             });

        //         if (userProfile != undefined) {
        //             return true;
        //         }
        //         return true;
        //     })
        // return false;
    }

    function signOut() {
        // return new Promise(function (resolve, reject) {
        //     firebase.auth().signOut().then(() => {
        //         resetAll()
        //         resolve(true);
        //     }).catch((error) => {
        //         console.error("Error: ", error);
        //         reject(false);
        //     })
        // })

        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resetAll()
                resolve(true);
            }, 500);
        })

    }

    function resetPassword(email) {

    }

    function updateEmail(email) {
        return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    async function insertIncollection(collectionName, data) {
        return new Promise(function (resolve, reject) {
            const obj = JSON.parse(JSON.stringify(data));

            // db.collection(collectionName).doc(obj.uid).set(obj)
            //     .then(() => {
            //         console.log("Document user writen with id", obj.uid);
            //         resolve(true);
            //     })
            //     .catch((error) => {
            //         console.error("Error adding document: ", error);
            //         reject(false);
            //     })
        });
    }

    function resetAll() {
        setCurrentUser(undefined)
        setUserProfile(undefined)
        setSignInMethod(undefined)
    }

    useEffect(() => {
         console.log('useEffect');
         console.log(currentUser);
         console.log(userProfile);
         console.log(loading);
         console.log(signInMethod);
         console.log('useEffect');

    },[])

    const value = {
        currentUser,
        userProfile,
        insertIncollection,
        login,
        signup,
        signOut,
        resetPassword,
        updateEmail,
        updatePassword,
        sendEmailVerification,
        loginGoogle,
        signInMethod,
        resetAll
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
