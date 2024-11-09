import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };
  const githubSignin=()=>{
    
  }





  const handleSignOut = () => {
    signOut(auth)
      .than(() => {
        console.log("Sign out successfully");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Create account with Google</button>
          <button onClick={githubSignin}> login with  github</button>
        </div>
      )}

      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
