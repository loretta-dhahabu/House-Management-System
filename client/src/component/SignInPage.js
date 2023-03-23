import React,{useState} from 'react'
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

function SignInPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? (
        <>
         <SignInForm onLogin={ onLogin } />
                <br></br>
          <p>
                      Don't have an account? &nbsp;
                      <br></br>
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <br></br>
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default SignInPage