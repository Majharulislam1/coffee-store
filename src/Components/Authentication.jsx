import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";




export const AuthContext = createContext();


const Authentication = ({children}) => {

     const [user,setUser] = useState();
     const [loading,setLoading] = useState(true);
  
     const handleRegistration =(email,password)=>{
         setLoading(true)
         return createUserWithEmailAndPassword(auth,email,password);
     }

    const handleLogin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth ,email,password);
    }

    const logOut = ()=>{
        setLoading(true);
          return signOut(auth);
    }

    useEffect(()=>{

        const unSubscribe=onAuthStateChanged(auth,user => {
                 setUser(user);
                 setLoading(false);
           })
         return ()=> unSubscribe;
  },[])


   
    const values = {handleRegistration,handleLogin,logOut,user,loading};


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authentication;