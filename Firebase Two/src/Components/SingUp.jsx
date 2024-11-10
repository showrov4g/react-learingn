import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase.init";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SingUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const term = e.target.terms.checked;

    console.log(email, password, term);

    setErrorMessage("");
    setSuccess(false);
    if(!term){
      setErrorMessage("Please accept our terms and condition")
      return;
    }

    if (password.length === 6) {
      setErrorMessage("password must be 6 character or more");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be One Uppercase one Lowercase and one number and one special Character"
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
        setSuccess(false);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-sm absolute right-4 top-11"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <div className="form-control">
            <label className="label cursor-pointer">
            <input type="checkbox" name="terms" className="checkbox" />
              <span className="label-text">Accept our term and condition</span>
             
            </label>
          </div>
          <button className="btn btn-primary">Sign Up Now</button>
        </div>
      </form>
      {errorMessage && <p className="text-red-700">{errorMessage}</p>}
      {success && <p className="text-green-600">Successfully sign up</p>}
    </div>
  );
};

export default SingUp;
