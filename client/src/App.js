import React, { useEffect, useState } from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Loading from './components/loading';
import BugTable from './components/BugTable';
import {getUserByAuth0Sub, postUser} from './services/UserService';

function App() {
  const { isLoading, loginWithRedirect, isAuthenticated, user } = useAuth0();
  
  const checkUserInDB = () => {

    const userData = {
      "auth0Sub": user.sub,
      "name": user.name,
      "nickname": user.nickname,
      "email": user.email,
      "role": user["http://demozero.net/roles"][0]
    };

    const fetchedUser = getUserByAuth0Sub(user.sub);

    if(!fetchedUser){
      postUser(userData);
    }
  }

  useEffect(() => {
    if(isAuthenticated){
      checkUserInDB();
    }
  })

  if (isLoading) return <Loading />

  return (
    !isAuthenticated &&(loginWithRedirect()),
    <div>
      <Navbar />
      {/* <LoginButton /> */}
      {/* <LogoutButton /> */}
      <Profile />
      <BugTable />
    </div>
  );
}

export default App;