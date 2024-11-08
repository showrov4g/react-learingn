import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";


const Login = () => {
    const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(results =>{
        console.log(results);
    })
    .catch(error =>{
        console.log(error);
    })
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Create account with Google</button>
    </div>
  );
};

export default Login;
