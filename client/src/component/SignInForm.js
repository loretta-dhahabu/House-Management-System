import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
// import Header from "./Header";

function SignInForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [ isLoading, setIsLoading ] = useState( false );
  
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));

        navigate("/dashboard");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <>
      {/* <Header /> */}
      <div className="signin-pg">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Rental House Management </h3>
          {/* <h4>
            <em>WELCOME!</em>
          </h4> */}
          <p>Please Enter Your Username and Password</p>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              className="form-control"
              placeholder="enter your username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              className="form-control"
              placeholder="enter your password...."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              {isLoading ? "Loading..." : "Login"}{" "}
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            </button>
          </div>
          <div className="form-group">
            {errors.map((err) => (
              <div key={err}>{err}</div>
            ))}
          </div>
          {/* <div>
          <p>Don’t have an account yet?</p>
          <a href="#">Creat Account</a>
        </div> */}
        </form>
      </div>
    </>
  );
}

export default SignInForm;
