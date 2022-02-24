import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Loading from './components/loading';
import BugTable from './components/BugTable';

function App() {
  const { isLoading, loginWithRedirect, isAuthenticated } = useAuth0();

  if (isLoading) return <Loading />

  return (
    !isAuthenticated &&(loginWithRedirect()),
    <div>
      <Navbar />
      {/* <LoginButton /> */}
      {/* <LogoutButton /> */}
      {/* <Profile /> */}
      <BugTable />
    </div>
  );
}

export default App;