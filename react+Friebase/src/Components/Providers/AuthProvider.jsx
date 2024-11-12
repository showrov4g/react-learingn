import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const name = "showrov ghosh";
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);
  // ===============

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return unSubscribe();
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)

  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };



  const signOutUser = ()=>{
    setLoading(true)
        return signOut(auth);
  }

  //   onAuthStateChanged(auth, (currentUser) => {
  //     if(currentUser){
  //         console.log("you have login", currentUser)
  //         setUser(currentUser);
  //     }else{
  //         console.log("no user data found");
  //         setUser(null);
  //     }
  //   });

  const authInfo = {
    name,
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
