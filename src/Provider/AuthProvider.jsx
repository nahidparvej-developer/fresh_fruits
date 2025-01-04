import {createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true);

const createuser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}

const signIn =  (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    setLoading(true);

    return signOut (auth)
}



useEffect(() =>{
    const unsubcribe =  onAuthStateChanged(auth, curruntuser => {
        setUser(curruntuser);
        console.log('current user', curruntuser);
        setLoading(false)
    });
    return() => {
        return unsubcribe()
    }
}
    ,[])

const authInfo ={
user,
loading,
createuser,
signIn,
logOut,

 }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
