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


    function sendEmailVerification() {

    }

    function login(email, password) {

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
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user == null)
                return;

            // levanta el perfil del firestore
            if (user.emailVerified) {
                setCurrentUser(user)
                var docRef = db.collection('users').doc(user.uid);
                docRef.get()
                    .then(function (doc) {
                        if (doc.exists) {
                            if (mountedRef.current) {
                                // console.log("Document data:", doc.data())
                                setUserProfile(doc.data());
                                setLoading(false)
                            };
                        } else {
                            // console.log("No user in user collection");
                        }
                    }).catch(function (error) {
                        console.error("Error getting document in user collection:", error);
                    });
            }
        });
        return () => {
            mountedRef.current = false;
            unsubscribe();
        }
    }, [])

    const value = {
        currentUser,
        userProfile,
        insertIncollection,
        login,
        signup,
        signOutFirebase,
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
