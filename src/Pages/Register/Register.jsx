import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import swal from "sweetalert";
import { Authcontext } from './../../Components/Providers/AuthProviders';

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccesss] = useState("");
  const { createUser } = useContext(Authcontext);

  const handleRegister = (e) => {


    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, name, photo, password);

    // reset error
    setRegisterError("");
    setSuccesss("");

    if (password.length < 6) {
      swal("error!", "Password should be at least 6 characters", "error");
      return;
    } 
    else if (!/[A-Z]/.test(password)) {
      swal(
        "error!",
        "Your password should have at least one charecter uppercase",
        "error"
      );
      return;
    }
   

    // createUser
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
       
        setSuccesss();
        swal("Good job!", "Your registetion successfully", "success");

      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        swal("error!", "Already registation completed", "error");
      });
  };

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo"
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
                  placeholder="Email"
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
                  placeholder="Password"
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
                <button className="btn btn-primary">Register</button>
                <p className="text-center mt-4">
                  Do you have an account. Please
                  <Link className="text-blue-600 font-bold" to="/login">
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
