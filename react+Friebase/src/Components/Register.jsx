import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password =e.target.password.value;

        createUser(email, password)
        .then(res =>{
          console.log(res)
        })
        .catch(error =>{
          console.log(error)
        })
        
    }

    return (
        <div className="my-6 card bg-base-100 w-2/3 mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl text-center font-bold">Register Now</h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
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
 
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="my-4">Already you have any account, <span><Link to='/login'>Login here</Link></span></p>
      </div>
    );
};

export default Register;