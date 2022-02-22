import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <Navbar />
      <LoginButton />
      {/* <LogoutButton /> */}
      <Profile />
    </div>
  );
}

export default App;