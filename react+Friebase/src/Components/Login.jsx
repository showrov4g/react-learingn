import React, { useContext } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const {signInUser} = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInUser(email, password)
    .then(result => {
      console.log(result.user)
      e.target.reset()
      navigate('/')
    })
    .catch(error =>{
      console.log(error.message)
    })
  };

  return (
    <div className="my-6 card bg-base-100 w-2/3 mx-auto max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl text-center font-bold">Login Now</h1>
      <form onSubmit={handleLogin} className="card-body">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="my-4">If you don't have any account please, <span><Link to='/register'>Sign Up</Link></span></p>
    </div>
  );
};

export default Login;
