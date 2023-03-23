import React, {useState} from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState([]);
  const [ isLoading, setIsLoading ] = useState( false );
  const [onLogin, setOnLogin] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        password,
        password_confirmation: passwordConfirmation,
        email,
        phone_number,
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((user) => onLogin(user));
      }
      else
      {
        response.json()
          .then( ( err ) => setErrors( err.errors ) );
      }
    });
  }

  return (
    <div className=" signup-pg">
      <form className=" container signup-form " onSubmit={ handleSubmit }>
        <h3>Sign Up</h3>
        <p>Please fill this form to Create an Account</p>
        <div className="form-group">
          <label htmlFor="name">
            Full Name</label>
            <input
              type="text"
              id="name"
              autoComplete="on"
              className="form-control"
              placeholder="enter your fullname..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
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
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            id="password_confirmation"
            autoComplete="current-password"
            className="form-control"
            placeholder="enter your password...."
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            autoComplete="current-email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="enter your email..."
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            autoComplete="on"
            className="form-control"
            id="exampleInputTel"
            placeholder="enter your phone number..."
            aria-describedby="telHelp"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {isLoading ? "Loading..." : "Signup"}{" "}
            <i className="fa fa-sign-out" aria-hidden="true"></i>
          </button>
        </div>
        <div className="form-group">
          {errors?.map((err) => (
            <div key={err}>{err}</div>
          ))}
        </div>
        {/* <div>
          <p>Don’t have an account yet?</p>
          <a href="#">Creat Account</a>
        </div> */}
      </form>
    </div>
  );
}

export default SignUpForm;
