import React, { useState } from 'react';
import Signup from './SignUp';
import Login from './LogIn';

function AuthComponent() {
  const [isSignup, setIsSignup] = useState(true);

  const toggleAuthComponent = () => {
    setIsSignup((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={toggleAuthComponent}>
        {isSignup ? 'Log In' : 'Sign Up'}
      </button>
      {isSignup ? <Signup /> : <Login />}
    </div>
  );
}

export default AuthComponent;
