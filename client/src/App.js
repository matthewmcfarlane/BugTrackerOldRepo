import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Loading from './components/loading';

function App() {
  const { isLoading, loginWithRedirect, isAuthenticated, user } = useAuth0();
 

  if (isLoading) return <Loading />

  return (
    !isAuthenticated &&(loginWithRedirect()),
    <div>
      <Navbar />
      {/* <LoginButton /> */}
      {/* <LogoutButton /> */}
      <Profile />
    </div>
  );
}

export default App;