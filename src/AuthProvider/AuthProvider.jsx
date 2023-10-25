import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)

    const createUser = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,passowrd) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passowrd)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentuser=>{
            setUser(currentuser)
            setLoading(false)
            console.log(currentuser);
        })
       return () => {
        unsubscribe()
       }
    },[])

    const authInfo = {
       createUser,
       user,
       loading,
       login
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;