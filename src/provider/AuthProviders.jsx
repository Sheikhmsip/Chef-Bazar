import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProviders = ({children}) => { 

const [user, setUser] = useState(null);


    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
             
        return signInWithEmailAndPassword(auth, email, password);
    } 

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            setUser(loggedInUser);
        })
        .catch(error => console.log(error.message))
    }

    // Github sign in function 

    const gitHubProvider = new GithubAuthProvider()
    const githubLogin = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser)
            setUser(loggedInUser);
        })
        .catch(error => console.log(error.message))
    }
   

    useEffect( () => {
       const unsubscribe = onAuthStateChanged( auth,  loggedUser => {
            console.log('Logged in user inside auth', loggedUser)
            setUser(loggedUser)
            
        })
        
        return () => {
            unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        googleLogin,
        githubLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;