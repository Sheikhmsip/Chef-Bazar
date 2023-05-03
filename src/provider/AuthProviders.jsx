// import React, { createContext, useEffect, useState } from 'react';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import app from '../firebase/firebase.config';

// export const AuthContext = createContext(); 

// const auth = getAuth(app)

// const AuthProviders = ({children}) => {
    
//     const [user, setUser] = useState(null);


//     const createUser = (auth, email, password) => {
       
//         return createUserWithEmailAndPassword(auth, email, password)
//     }

//     const signIn = (email, password) => {
             
//         return signInWithEmailAndPassword(auth, email, password);
//     } 

//     useEffect( () => {
//         const unsubscribe = onAuthStateChanged( auth,  loggedUser => {
//              console.log('Logged in user inside auth', loggedUser)
//              setUser(loggedUser)
            
//          })
         
//          return () => {
//              unsubscribe();
//          }
//      }, [])

//     const authInfo = {
//         user,
//         createUser,
//         signIn,
//     }


import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;