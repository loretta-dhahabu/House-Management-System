import React, { useState } from 'react'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
// import {Link} from 'react-router-dom'

function Home({ onLogin }) {
   const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container-fluid bg-success ">
      {showLogin ? (
        <div>
          <SignInForm onLogin={onLogin} />
          <p className="tosignup">
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <br></br>
          <p className='tologin'>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Login
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Home