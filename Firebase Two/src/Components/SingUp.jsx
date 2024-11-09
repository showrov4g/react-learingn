import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase.init";

const SingUp = () => {

    
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password )
        .then(res => {
            console.log(res)
        } )
        .catch(error =>{
            console.log(error);
        })




  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email"
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
          <input name="password"
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
          <button className="btn btn-primary">Sign Up Now</button>
        </div>
      </form>
    </div>
  );
};

export default SingUp;
