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
  // ===============

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User", currentUser);
      setUser(currentUser);
    });
    return unSubscribe();
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };



  const signOutUser = ()=>{
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
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
