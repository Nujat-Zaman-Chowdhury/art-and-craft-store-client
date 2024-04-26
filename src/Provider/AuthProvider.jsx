import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    //register
    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })
    }

    //login
    const loginUSer = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google log in
    const googleLogIn = ()=>{
       return signInWithPopup(auth, googleProvider)
    }
    //github login
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    //logout
    const logOut = ()=>{
      return  signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
          });

         return ()=>{unSubscribe();} 
    },[])

    const authInfo = {
        user,
        createUser,
        loginUSer,
        logOut,
        updateUserProfile,
        googleLogIn,
        githubLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;