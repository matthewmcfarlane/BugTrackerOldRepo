import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className='font-bold rounded border-2 border-indigo-500/100 bg-blue-300 hover:bg-blue-500 hover:border-indigo-300' onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default LoginButton